function ExtractUniqueWords(input) {
    let set = new Set();
    input.join(' ').toLowerCase().split(/[^\w]+/gm).filter(a => a !== '').forEach(w => {set.add(w)});
    console.log(Array.from(set).join(', '));
}
ExtractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.']);