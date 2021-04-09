export function removeList(index) {
    return {
    type: 'REMOVE_LIST',
    index
    }
   }
   export function addList(list) {
    return {
    type: 'ADD_LIST',
    list
    }
   }
  