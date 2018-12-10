window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let lesson = document.querySelector('h2'),
        title = document.querySelector('title'),
        myBody = document.querySelector('body');

    lesson.textContent = 'Домашнее задание Урок № 15';
    title.textContent = 'Lesson 15';
    lesson.style.textAlign = 'center';

    // function User(name, age) {
    //     this.name = name;
    //     let userAge = age;
    //
    //     this.getAge = function() {
    //       return userAge;
    //     };
    //     this.setAge = function(age) {
    //         if (typeof age === 'number' && age > 0 && age < 100) {
    //             userAge = age;
    //         } else {
    //             console.log('Недопустимое значение');
    //         }
    //     };
    //
    //     this.say = function () {
    //         console.log(`Имя пользователя ${this.name}, его возраст - ${userAge}` )
    //     }
    // }
    //
    // let user = new User('Valeriy', 48);
    //
    // console.log(user.name);
    // console.log(user.getAge());
    // user.say();
    //
    // user.setAge(25);
    //
    // console.log(user.getAge());

/*    let number = 1;

    (function() {
       let number = 2;
        console.log(number);

        return console.log(number + 3);
    }());

    console.log(number);*/


/*    let user = (function() {
       let privat = function () {
           console.log('I am a private');
       };
       return {
           sayHello: function() {
               console.log('Hello!');
           }
       };
    }());

    console.log(user);
    console.log(user.sayHello());*/

    let user2 = (function() {
        let privat = function () {
            console.log('I am a private');
        };
        let sayHello = function() {
            console.log('Hello!');
        };
        return {
            sayHello: sayHello,
            privat: privat
        };
    }());

    console.log(user2);
    console.log(user2.sayHello());
    console.log(user2.privat());

});
/*

let app = {
    data: 45
};
console.log(app);*/


