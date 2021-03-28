var getUserInfoWithType = function (user) {
    return "name:" + user.name + ",age:" + user.age;
};
getUserInfoWithType({ name: 'koala', age: 18 });
