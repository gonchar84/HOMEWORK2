const tasks = {
items: [],
filter: '',
add: function (item) {

    this.items.push(item);
},

remove: function () {
this.items.splice(key, 1);
},

get: function(){

     // фильтруем массив и возращаем только нужные таски
    return this.items.filter((item) => {
        return (!this.filter || this.filter === 'all') || item.status === this.filter;
    });
}

}
export default tasks;
