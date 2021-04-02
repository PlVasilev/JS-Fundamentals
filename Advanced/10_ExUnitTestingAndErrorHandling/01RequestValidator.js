function validateRequest(input){
    console.log(input.uri);
    if (input.method !== 'GET' && input.method !== 'POST' && input.method !== 'DELETE' && input.method !== 'CONNECT' ){
        throw new Error('Invalid request header: Invalid Method');
    } else if (!('uri' in input)){
        throw new Error('Invalid request header: Invalid URI');
    } else if (input.uri === ''){
        throw new Error('Invalid request header: Invalid URI')
    } else if (input.uri !== '*' && input.uri.match(/[^A-Za-z0-9.]+/g)){
        throw new Error('Invalid request header: Invalid URI')
    } else if (!('version' in input)){
        throw new Error('Invalid request header: Invalid Version');
    } else if (input.version !== 'HTTP/0.9' && input.version !== 'HTTP/1.0' && input.version !== 'HTTP/1.1' && input.version !== 'HTTP/2.0' ){
        throw new Error('Invalid request header: Invalid Version')
    } else if (!('message' in input)){
        throw new Error('Invalid request header: Invalid Message');
    } else if (input.message.match(/[<>\\&'"]+/g)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return input
}


validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog///',
    version: 'HTTP/1.1',
    message: ''
});
