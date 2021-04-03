function attachEvents() {
    const USERNAME = 'guest';
    const PASSWORD = 'guest';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {"Authorization": 'Basic ' + BASE_64,
                    "Content-type": "application/json"}
    $('.add').on('click',function () {
        let url = 'https://baas.kinvey.com/appdata/kid_ryNilFjQQ/biggestCatches';
        let angler = $('#addForm > .angler').val();
        let weight = $('#addForm > .weight').val();
        let species = $('#addForm > .species').val();
        let location = $('#addForm > .location').val();
        let bait = $('#addForm > .bait').val();
        let captureTime = $('#addForm > .captureTime').val();
        $.ajax({
            method: "POST",
            url: url,
            headers: AUTH,
            data: JSON.stringify({
                "angler" : angler,
                "weight" : Number(weight),
                "species" : species,
                "location" : location,
                "bait" : bait,
                "captureTime" : Number(captureTime)

            })
        }).then(function () {
            $('#addForm > .angler').val('');
            $('#addForm > .weight').val('');
            $('#addForm > .species').val('');
            $('#addForm > .location').val('');
            $('#addForm > .bait').val('');
            $('#addForm > .captureTime').val('');
        }).catch(function(err){
            catchErr(err)
        })
    })

    $('.load').on('click',function () {
        let url = 'https://baas.kinvey.com/appdata/kid_ryNilFjQQ/biggestCatches';
        $.ajax({
            method: "GET",
            url:url,
            headers: AUTH
        }).then(function (objs) {
            for (const obj of objs) {
             let div =  $(`<div class="catch" data-id=${obj._id}></div>`)
            div.append($(`<label>Angler</label>`));
            div.append($(`<input type="text" class="angler" value="${obj.angler}"/>`));
            div.append($(`<label>Weight</label>`));
            div.append($(`<input type="number" class="weight" value="${obj.weight}"/>`));
            div.append($(`<label>Species</label>`));
            div.append($(`<input type="text" class="species" value="${obj.species}"/>`));
            div.append($(`<label>Location</label>`));
            div.append($(`<input type="text" class="location" value="${obj.location}"/>`));
            div.append($(`<label>Bait</label>`));
            div.append($(`<input type="text" class="bait" value="${obj.bait}"/>`));
            div.append($(`<label>Capture Time</label>`));
            div.append($(`<input type="number" class="captureTime" value="${obj.captureTime}"/>`));
            div.append($(`<button class="update">Update</button>`).on('click',updateCatch));
            div.append($(`<button class="delete">Delete</button>`).on('click',deleteCatch));
            $('#catches').append(div)
            }
        }).catch(function (err) {
            handleError(err)
        })
    });

    function deleteCatch(event) {
        let target = $(event.target).parent();
        let id = target.attr("data-id");
        let url = `https://baas.kinvey.com/appdata/kid_ryNilFjQQ/biggestCatches/${id}`;
        $.ajax({
            method: "DELETE",
            url: url,
            headers: AUTH
        }).then(function (result) {
            target.remove()
        }).catch(function (err) {
            catchErr(err)
        })
    }

    function updateCatch(event) {
        let target = $(event.target).parent();
        let id = target.attr("data-id");
        let url = `https://baas.kinvey.com/appdata/kid_ryNilFjQQ/biggestCatches/${id}`;
        let angler = target.find('.angler').val()
        let weight = target.find('.weight').val()
        let species = target.find('.species').val()
        let location = target.find('.location').val()
        let bait = target.find('.bait').val()
        let captureTime = target.find('.captureTime').val()
        $.ajax({
            method: "PUT",
            url: url,
            headers: AUTH,
            data: JSON.stringify({
                "angler" : angler,
                "weight" : Number(weight),
                "species" : species,
                "location" : location,
                "bait" : bait,
                "captureTime" : Number(captureTime)

            })
        }).then(function () {
            $('#addForm > .angler').val(angler);
            $('#addForm > .weight').val(weight);
            $('#addForm > .species').val(species);
            $('#addForm > .location').val(location);
            $('#addForm > .bait').val(bait);
            $('#addForm > .captureTime').val(captureTime);
        }).catch(function(err){
            catchErr(err)
        })
    }

    function catchErr(error) {
        console.log(error);
    }
}