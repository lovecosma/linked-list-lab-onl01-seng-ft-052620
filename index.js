function getName(node){
   return node['name']

}

function headNode(linked, collection){
    return collection[linked]
}

function next(node, collection){
    let next = node['next']    
    return collection[next]
}

function nodeAt(index, list, collection){
    let node = headNode(list, collection)

    for(let i = 0; i < index; i++){
        node = next(node, collection)
    }
    return node
}

function addressAt(index, list, collection){
    let node = headNode(list, collection)
    for(let i = 0; i < index; i ++){
        node = next(node, collection)
    }
    return getName(node)
}