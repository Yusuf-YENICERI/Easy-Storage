





import db from "./EasyStorage";

//get functions test

export const RefTests = {
    RefBlank : (data)=>{
        db.ref("").set(data);
        return db.getDb();
    },
    RefNull : (data)=>{
        db.ref(null).set(data);
        return db.getDb();
    },

    RefOnlySlash : (data)=>{
        db.ref("/").set(data);
        return db.getDb();
    },

    RefUsers: (data) => {
        db.ref("/users/1").set(data);
        return db.getDb();
    }
}

export const SetTests = {
    SetNull : (ref)=>{
        db.ref(ref).set(null);
        return db.getDb();
    },

    SetNumberValueOnObject : (ref)=>{
        db.ref(ref).set({number: 2.3});
        return db.getDb();
    },

    SetBooleanOnObject: (ref) => {
        db.ref(ref).set({IsRight: false});
        return db.getDb();
    },

    SetNullOnObject: (ref) => {
        db.ref(ref).set({data: null});
        return db.getDb();
    },


    SetStringOnObject: (ref) => {
        db.ref(ref).set({data: 'tester'});
        return db.getDb();
    },


    //multiple object data

    SetMObjectsNumberValueOnObject : (ref)=>{
        db.ref(ref).set({project1: {
            datas: {1: {data: 2.56}, 2:{data: 3.8}}
        }});
        return db.getDb();
    },

    SetMObjectsNumberValueOnObjectData: {
        project1: {datas: {1: {data: 2.56}, 2:{data: 3.8}}}
    },

    SetMObjectsBooleanOnObject: (ref) => {
        db.ref(ref).set({project1: {
            datas: {1: {data: false}, 2:{data: true}}
        }});
        return db.getDb();
    },

    SetMObjectsNBooleanValueOnObjectData: {
        project1: {datas: {1: {data: false}, 2:{data: true}}}
    },

    SetMObjectsNullOnObject: (ref) => {
        db.ref(ref).set({project1: {
            datas: {1: {data: null}, 2:{data: null}}
        }});
        return db.getDb();
    },

    SetMObjectsNullValueOnObjectData: {
        project1: {datas: {1: {data: null}, 2:{data: null}}}
    },

    SetMObjectsStringOnObject: (ref) => {
        db.ref(ref).set({project1: {
            datas: {1: {data: 'tester'}, 2:{data: 'tester'}}
        }});
        return db.getDb();
    },

    SetMObjectsStringValueOnObjectData: {
        project1: {datas: {1: {data: 'tester'}, 2:{data: 'tester'}}}
    },

    //array data

    SetNullsOnArray: (ref)=>{
        db.ref(ref).set([null,null])
        return db.getDb();
    },

    SetNullsOnArrayData: [null,null],

    SetNumbersOnArray: (ref)=>{
        db.ref(ref).set([1, 2])
        return db.getDb();
    },

    SetNumbersOnArrayData: [1, 2],

    SetBooleanOnArray: (ref)=>{
        db.ref(ref).set([true, false])
        return db.getDb();
    },

    SetBooleanOnArrayData: [true, false],


    SetStringOnArray: (ref)=>{
        db.ref(ref).set([true, false])
        return db.getDb();
    },

    SetStringOnArrayData: [true, false],


    SetObjectOnArray: (ref)=>{
        db.ref(ref).set([{name: 'Tester 1'}, {name: 'Tester 2'}])
        return db.getDb();
    },

    SetObjectOnArrayData: [{name: 'Tester 1'}, {name: 'Tester 2'}],


    SetMObjectsOnArray: (ref)=>{
        db.ref(ref).set([{project1: {datas: {1: {data: false}, 2:{data: true}}}}, {project1: {datas: {1: {data: false}, 2:{data: true}}}}])
        return db.getDb();
    },

    SetMObjectsOnArrayData: [{project1: {datas: {1: {data: false}, 2:{data: true}}}}, {project1: {datas: {1: {data: false}, 2:{data: true}}}}],

    SetMObjectsWithArrayOnArray: (ref)=>{
        db.ref(ref).set([{project1: {datas: {1: {data: ['tester 1', {innerData: [1, 2]}]}, 2:{data: ['tester 1', {innerData: [1, 2]}]}}}}, {project1: {datas: {1: {data: ['tester 1', {innerData: [1, 2]}]}, 2:{data: ['tester 1', {innerData: [1, 2]}]}}}}])
        return db.getDb();
    },

    SetMObjectsWithArrayOnArrayData: [{project1: {datas: {1: {data: ['tester 1', {innerData: [1, 2]}]}, 2:{data: ['tester 1', {innerData: [1, 2]}]}}}}, {project1: {datas: {1: {data: ['tester 1', {innerData: [1, 2]}]}, 2:{data: ['tester 1', {innerData: [1, 2]}]}}}}],


    //multiple object array data tests

    SetMObjectsWithArrayNumberValueOnObject : (ref)=>{
        db.ref(ref).set({
            project1: {datas: {1: {data: [2.56, 3.12]}, 2:{data: [3.8, 4.5]}}}
        });
        return db.getDb();
    },

    SetMObjectsWithArrayNumberValueOnObjectData: {
        project1: {datas: {1: {data: [2.56, 3.12]}, 2:{data: [3.8, 4.5]}}}
    },

    SetMObjectsWithArrayBooleanOnObject: (ref) => {
        db.ref(ref).set({
            project1: {datas: {1: {data: [true, true]}, 2:{data: [false, false]}}}
        });
        return db.getDb();
    },

    SetMObjectsWithArrayBooleanValueOnObjectData: {
        project1: {datas: {1: {data: [true, true]}, 2:{data: [false, false]}}}
    },

    SetMObjectsWithArrayNullOnObject: (ref) => {
        db.ref(ref).set({
            project1: {datas: {1: {data: [null, null]}, 2:{data: [null, null]}}}
        });
        return db.getDb();
    },

    SetMObjectsWithArrayNullValueOnObjectData: {
        project1: {datas: {1: {data: [null, null]}, 2:{data: [null, null]}}}
    },

    SetMObjectsWithArrayStringOnObject: (ref) => {
        db.ref(ref).set({
            project1: {datas: {1: {data: ['tester', 'tester']}, 2:{data: ['tester', 'tester']}}}
        });
        return db.getDb();
    },

    SetMObjectsWithArrayStringValueOnObjectData: {
        project1: {datas: {1: {data: ['tester', 'tester']}, 2:{data: ['tester', 'tester']}}}
    },

    SetMObjectsWithArrayMObjectsComplexOnObject: (ref) => {
        db.ref(ref).set({
            project1: {datas: {1: {data: [{innerData: null}, {innerData: 1}]}, 2:{data: [{innerData: 'string'}, {innerData: false}]}}}
        });
        return db.getDb();
    },

    SetMObjectsWithArrayMObjectsComplexValuesOnObjectData: {
        project1: {datas: {1: {data: [{innerData: null}, {innerData: 1}]}, 2:{data: [{innerData: 'string'}, {innerData: false}]}}}
    },
}


export const GetTests = {
    GetTestData: {
        project1: {
            users:
            [
                {
                    name: 'Tester 1',
                    age: 25,
                    books: ['First', 'Second', 'Third'],
                    friends: [
                        {
                            name: 'Friend 1',
                            age: 28,
                            books: ['Friend First', 'Friend Second', 'Friend Third']
                        },
                        {
                            name: 'Friend 2',
                            age: 22,
                            books: ['Friend 2 First', 'Friend 2 Second', 'Friend 2 Third']
                        }
                    ],
                    visitedPages : [1, 2, 3, 4, 5],
                },

                {
                    name: 'Tester 2',
                    age: 37,
                    books: ['First 2', 'Second 2', 'Third 2'],
                    friends: [
                        {
                            name: 'Friend 3',
                            age: 35,
                            books: ['Friend 3 First', 'Friend 3 Second', 'Friend 3 Third']
                        },
                        {
                            name: 'Friend 4',
                            age: 39,
                            books: ['Friend 4 First', 'Friend 4 Second', 'Friend 4 Third']
                        }
                    ],
                    visitedPages : [1, 2, 3, 4, 5],
                },
            ],

            apiVersion: 1.21,

        },

        project2: {
            users:
            [
                {
                    name: 'Tester 3',
                    age: 40,
                    books: ['First 3', 'Second 3', 'Third 3'],
                    friends: [
                        {
                            name: 'Friend 5',
                            age: 54,
                            books: ['Friend 5 First', 'Friend 5 Second', 'Friend 5 Third']
                        },
                        {
                            name: 'Friend 6',
                            age: 39,
                            books: ['Friend 6 First', 'Friend 6 Second', 'Friend 6 Third']
                        }
                    ],
                    visitedPages : [1, 2, 3, 4, 5],
                },

                {
                    name: 'Tester 4',
                    age: 46,
                    books: ['First 4', 'Second 4', 'Third 4'],
                    friends: [
                        {
                            name: 'Friend 7',
                            age: 45,
                            books: ['Friend 7 First', 'Friend 7 Second', 'Friend 7 Third']
                        },
                        {
                            name: 'Friend 8',
                            age: 52,
                            books: ['Friend 8 First', 'Friend 8 Second', 'Friend 8 Third']
                        }
                    ],
                    visitedPages : [1, 2, 3, 4, 5],
                },
            ],

            apiVersion: 1.21,

        }
    },

    GetProjects: ()=>{
        return db.ref("/").get();
    },

    GetProject: (which: number)=>{
        return db.ref(`project${which}`).get();
    },

    GetApiVersion: (which: number = 1)=>{
        return db.ref(`project${which}/apiVersion`).get();
    },

    GetUsers: (which: number = 1)=>{
        return db.ref(`project${which}/users`).get();
    },

    GetUser: (whichProject: number = 1, whichUser: number = 0)=>{
        return db.ref(`project${whichProject}/users`).get()[whichUser];
    }
}


export const ModifyTests = {
    ModifyTestData: {
        project1: {
            users:
            [
                {
                    name: 'Tester 1',
                    age: 25,
                    books: ['First', 'Second', 'Third'],
                    friends: [
                        {
                            name: 'Friend 1',
                            age: 28,
                            books: ['Friend First', 'Friend Second', 'Friend Third']
                        },
                        {
                            name: 'Friend 2',
                            age: 22,
                            books: ['Friend 2 First', 'Friend 2 Second', 'Friend 2 Third']
                        }
                    ],
                    visitedPages : [1, 2, 3, 4, 5],
                },

                {
                    name: 'Tester 2',
                    age: 37,
                    books: ['First 2', 'Second 2', 'Third 2'],
                    friends: [
                        {
                            name: 'Friend 3',
                            age: 35,
                            books: ['Friend 3 First', 'Friend 3 Second', 'Friend 3 Third']
                        },
                        {
                            name: 'Friend 4',
                            age: 39,
                            books: ['Friend 4 First', 'Friend 4 Second', 'Friend 4 Third']
                        }
                    ],
                    visitedPages : [1, 2, 3, 4, 5],
                },
            ],

            apiVersion: 1.21,

        },

        project2: {
            users:
            [
                {
                    name: 'Tester 3',
                    age: 40,
                    books: ['First 3', 'Second 3', 'Third 3'],
                    friends: [
                        {
                            name: 'Friend 5',
                            age: 54,
                            books: ['Friend 5 First', 'Friend 5 Second', 'Friend 5 Third']
                        },
                        {
                            name: 'Friend 6',
                            age: 39,
                            books: ['Friend 6 First', 'Friend 6 Second', 'Friend 6 Third']
                        }
                    ],
                    visitedPages : [1, 2, 3, 4, 5],
                },

                {
                    name: 'Tester 4',
                    age: 46,
                    books: ['First 4', 'Second 4', 'Third 4'],
                    friends: [
                        {
                            name: 'Friend 7',
                            age: 45,
                            books: ['Friend 7 First', 'Friend 7 Second', 'Friend 7 Third']
                        },
                        {
                            name: 'Friend 8',
                            age: 52,
                            books: ['Friend 8 First', 'Friend 8 Second', 'Friend 8 Third']
                        }
                    ],
                    visitedPages : [1, 2, 3, 4, 5],
                },
            ],

            apiVersion: 1.21,

        }
    },

    ModifyNullCase: ()=>{
        return db.ref("/").modify(null);
    },

    ModifyNullCaseData: null,

    ModifyProjects: ()=>{
        return db.ref("/").modify((projects)=>{
            projects.project1.apiVersion = 2.5;
            projects.project1.users[0].books[1] = 'modified';
            return projects;
        });
    },

    ModifyProject: (which: number)=>{
        return db.ref(`project${which}`).modify((project)=>{
            project.apiVersion = 2.5;
            project.users[1].age = 38;
            return project;
        });
    },

    ModifyApiVersion: (which: number = 1)=>{
        return db.ref(`project${which}/apiVersion`).modify((apiVersion)=>{
            apiVersion = 2.5;
            return apiVersion;
        });
    },

    ModifyUsers: (which: number = 1)=>{
        return db.ref(`project${which}/users`).modify((users)=>{

            users.push({
                name: 'new user',
                age: 34,
                books: null
            })

            return users;
        });
    },

    ModifyUser: (whichProject: number = 1, whichUser: number = 0)=>{
        return db.ref(`project${whichProject}/users`).modify((users)=>{
            users[0].name = 'modified name';
            users[0].newData = true;
            return users;
        });
    }
}