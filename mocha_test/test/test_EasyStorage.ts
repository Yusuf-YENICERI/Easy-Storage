//                          BİSMİLLAHİRRAHMANİRRAHİM




import { assert } from "chai";
// const index = require("../index");
import { GetTests, RefTests, SetTests, ModifyTests } from "../test_functions";

let scope = "@EasyStorage:";

describe('EasyStorage tests:', ()=>{
    describe('Ref tests:', ()=>{
        it('ref blank', ()=>{
            assert.equal(RefTests.RefBlank(null), null);
            assert.deepEqual(RefTests.RefBlank({version: 1}), {version: 1});
            let user = {
                    name: 'test',
                    surname: 'other',
                }
            assert.deepEqual(RefTests.RefBlank({ user: user }), {user:user});

        });

        it("ref null", ()=>{
            assert.throws(()=>RefTests.RefNull({test:1}), `${scope} Please specify a reference! Null given.`);
        });

        it("ref only slash", ()=>{
            assert.deepEqual(RefTests.RefOnlySlash({test:2}),{test:2});
        })

        it('ref users', ()=>{
            assert.deepEqual(RefTests.RefOnlySlash({name: 'tester'}), {name: 'tester'});
        })
    });


    describe('Set tests:', ()=>{
        describe('object tests:', ()=>{
            it('Set null', ()=>{
                assert.equal(SetTests.SetNull("/"), null);
                //set db to null
                assert.equal(SetTests.SetNull(""), null);
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetNull("/users/1"), {users: {1: null}});
                assert.deepEqual(SetTests.SetNull("/users/2"), {users: {1: null, 2: null}});
                assert.deepEqual(SetTests.SetNull("/users/version"), {users: {1: null, 2: null, version: null}});
                assert.deepEqual(SetTests.SetNull("/users/1/name"), {users: {1: {name: null}, 2: null, version: null}});
                assert.deepEqual(SetTests.SetNull("/users/2/neighbour/name"), {users: {1: {name: null}, 2: { neighbour: {name: null}}, version: null}});
            });
    
            it('Set number on object', ()=>{
                assert.deepEqual(SetTests.SetNumberValueOnObject("/"), {number: 2.3});
                //set db to null
                assert.deepEqual(SetTests.SetNumberValueOnObject(""), {number: 2.3});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetNumberValueOnObject("/users/1"), {users: {1: {number: 2.3}}});
                assert.deepEqual(SetTests.SetNumberValueOnObject("/users/2"), {users: {1: {number: 2.3}, 2: {number: 2.3}}});
                assert.deepEqual(SetTests.SetNumberValueOnObject("/users/version"), {users: {1: {number: 2.3}, 2: {number: 2.3}, version: {number: 2.3}}});
                assert.deepEqual(SetTests.SetNumberValueOnObject("/users/1/name"), {users: {1: {name: {number: 2.3}, number: 2.3}, 2: {number: 2.3}, version: {number: 2.3}}});
                assert.deepEqual(SetTests.SetNumberValueOnObject("/users/2/neighbour/name"), {users: {1: {name: {number: 2.3}, number: 2.3}, 2: { neighbour: {name: {number: 2.3}}, number: 2.3}, version: {number: 2.3}}});
            })
    
            it('Set boolean on object', ()=>{
                assert.deepEqual(SetTests.SetBooleanOnObject("/"), {IsRight: false});
                //set db to null
                assert.deepEqual(SetTests.SetBooleanOnObject(""), {IsRight: false});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetBooleanOnObject("/users/1"), {users: {1: {IsRight: false}}});
                assert.deepEqual(SetTests.SetBooleanOnObject("/users/2"), {users: {1: {IsRight: false}, 2: {IsRight: false}}});
                assert.deepEqual(SetTests.SetBooleanOnObject("/users/version"), {users: {1: {IsRight: false}, 2: {IsRight: false}, version: {IsRight: false}}});
                assert.deepEqual(SetTests.SetBooleanOnObject("/users/1/name"), {users: {1: {name: {IsRight: false}, IsRight: false}, 2: {IsRight: false}, version: {IsRight: false}}});
                assert.deepEqual(SetTests.SetBooleanOnObject("/users/2/neighbour/name"), {users: {1: {name: {IsRight: false}, IsRight: false}, 2: { neighbour: {name: {IsRight: false}}, IsRight: false}, version: {IsRight: false}}});
            });
    
            it('Set null on object', ()=>{
                assert.deepEqual(SetTests.SetNullOnObject("/"), {data: null});
                //set db to null
                assert.deepEqual(SetTests.SetNullOnObject(""), {data: null});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetNullOnObject("/users/1"), {users: {1: {data: null}}});
                assert.deepEqual(SetTests.SetNullOnObject("/users/2"), {users: {1: {data: null}, 2: {data: null}}});
                assert.deepEqual(SetTests.SetNullOnObject("/users/version"), {users: {1: {data: null}, 2: {data: null}, version: {data: null}}});
                assert.deepEqual(SetTests.SetNullOnObject("/users/1/name"), {users: {1: {name: {data: null}, data: null}, 2: {data: null}, version: {data: null}}});
                assert.deepEqual(SetTests.SetNullOnObject("/users/2/neighbour/name"), {users: {1: {name: {data: null}, data: null}, 2: { neighbour: {name: {data: null}}, data: null}, version: {data: null}}});
            });


            it('Set string on object', ()=>{
                assert.deepEqual(SetTests.SetStringOnObject("/"), {data: 'tester'});
                //set db to null
                assert.deepEqual(SetTests.SetStringOnObject(""), {data: 'tester'});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetStringOnObject("/users/1"), {users: {1: {data: 'tester'}}});
                assert.deepEqual(SetTests.SetStringOnObject("/users/2"), {users: {1: {data: 'tester'}, 2: {data: 'tester'}}});
                assert.deepEqual(SetTests.SetStringOnObject("/users/version"), {users: {1: {data: 'tester'}, 2: {data: 'tester'}, version: {data: 'tester'}}});
                assert.deepEqual(SetTests.SetStringOnObject("/users/1/name"), {users: {1: {name: {data: 'tester'}, data: 'tester'}, 2: {data: 'tester'}, version: {data: 'tester'}}});
                assert.deepEqual(SetTests.SetStringOnObject("/users/2/neighbour/name"), {users: {1: {name: {data: 'tester'}, data: 'tester'}, 2: { neighbour: {name: {data: 'tester'}}, data: 'tester'}, version: {data: 'tester'}}});
            })
        });

        describe('multiple object data tests:', ()=>{


            it('set null on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsNullValueOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsNullOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsNullOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsNullOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsNullOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsNullOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsNullOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsNullOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            })

            it('set number on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsNumberValueOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsNumberValueOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsNumberValueOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsNumberValueOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsNumberValueOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsNumberValueOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsNumberValueOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsNumberValueOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            });


            it('set boolean on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsNBooleanValueOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsBooleanOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsBooleanOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsBooleanOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsBooleanOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsBooleanOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsBooleanOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsBooleanOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            })

            it('set string on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsStringValueOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsStringOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsStringOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsStringOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsStringOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsStringOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsStringOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsStringOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            })
            
        })


        describe('array data tests:', ()=>{
                it('set nulls', ()=>{

                    let arrayData = SetTests.SetNullsOnArrayData;

                    assert.sameMembers(SetTests.SetNullsOnArray("/"), arrayData);
                    //set db to null
                    assert.sameMembers(SetTests.SetNullsOnArray(""), arrayData);
                    
                    //set db to {}
                    RefTests.RefBlank({});
                    assert.deepEqual(SetTests.SetNullsOnArray("/users/1"), {users: {1: arrayData}});
                    assert.deepEqual(SetTests.SetNullsOnArray("/users/2"), {users: {1: arrayData, 2: arrayData}});
                    assert.deepEqual(SetTests.SetNullsOnArray("/users/version"), {users: {1: arrayData, 2: arrayData, version: arrayData}});
                    assert.throws(()=>SetTests.SetNullsOnArray("/users/1/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                    assert.throws(()=>SetTests.SetNullsOnArray("/users/2/neighbour/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                });

                it('set numbers', ()=>{

                    let arrayData = SetTests.SetNumbersOnArrayData;

                    assert.sameMembers(SetTests.SetNumbersOnArray("/"), arrayData);
                    //set db to null
                    assert.sameMembers(SetTests.SetNumbersOnArray(""), arrayData);
                    
                    //set db to {}
                    RefTests.RefBlank({});
                    assert.deepEqual(SetTests.SetNumbersOnArray("/users/1"), {users: {1: arrayData}});
                    assert.deepEqual(SetTests.SetNumbersOnArray("/users/2"), {users: {1: arrayData, 2: arrayData}});
                    assert.deepEqual(SetTests.SetNumbersOnArray("/users/version"), {users: {1: arrayData, 2: arrayData, version: arrayData}});
                    assert.throws(()=>SetTests.SetNumbersOnArray("/users/1/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                    assert.throws(()=>SetTests.SetNumbersOnArray("/users/2/neighbour/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                });

                it('set boolean', ()=>{

                    let arrayData = SetTests.SetBooleanOnArrayData;

                    assert.sameMembers(SetTests.SetBooleanOnArray("/"), arrayData);
                    //set db to null
                    assert.sameMembers(SetTests.SetBooleanOnArray(""), arrayData);
                    
                    //set db to {}
                    RefTests.RefBlank({});
                    assert.deepEqual(SetTests.SetBooleanOnArray("/users/1"), {users: {1: arrayData}});
                    assert.deepEqual(SetTests.SetBooleanOnArray("/users/2"), {users: {1: arrayData, 2: arrayData}});
                    assert.deepEqual(SetTests.SetBooleanOnArray("/users/version"), {users: {1: arrayData, 2: arrayData, version: arrayData}});
                    assert.throws(()=>SetTests.SetBooleanOnArray("/users/1/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                    assert.throws(()=>SetTests.SetBooleanOnArray("/users/2/neighbour/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                });

                it('set string', ()=>{

                    let arrayData = SetTests.SetStringOnArrayData;

                    assert.sameMembers(SetTests.SetStringOnArray("/"), arrayData);
                    //set db to null
                    assert.sameMembers(SetTests.SetStringOnArray(""), arrayData);
                    
                    //set db to {}
                    RefTests.RefBlank({});
                    assert.deepEqual(SetTests.SetStringOnArray("/users/1"), {users: {1: arrayData}});
                    assert.deepEqual(SetTests.SetStringOnArray("/users/2"), {users: {1: arrayData, 2: arrayData}});
                    assert.deepEqual(SetTests.SetStringOnArray("/users/version"), {users: {1: arrayData, 2: arrayData, version: arrayData}});
                    assert.throws(()=>SetTests.SetStringOnArray("/users/1/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                    assert.throws(()=>SetTests.SetStringOnArray("/users/2/neighbour/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                });


                it('set object', ()=>{

                    let arrayData = SetTests.SetObjectOnArrayData;

                    assert.sameDeepMembers(SetTests.SetObjectOnArray("/"), arrayData);
                    //set db to null
                    assert.sameDeepMembers(SetTests.SetObjectOnArray(""), arrayData);
                    
                    //set db to {}
                    RefTests.RefBlank({});
                    assert.deepEqual(SetTests.SetObjectOnArray("/users/1"), {users: {1: arrayData}});
                    assert.deepEqual(SetTests.SetObjectOnArray("/users/2"), {users: {1: arrayData, 2: arrayData}});
                    assert.deepEqual(SetTests.SetObjectOnArray("/users/version"), {users: {1: arrayData, 2: arrayData, version: arrayData}});
                    assert.throws(()=>SetTests.SetObjectOnArray("/users/1/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                    assert.throws(()=>SetTests.SetObjectOnArray("/users/2/neighbour/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                });


                it('set multiple object', ()=>{

                    let arrayData = SetTests.SetMObjectsOnArrayData;

                    assert.sameDeepMembers(SetTests.SetMObjectsOnArray("/"), arrayData);
                    //set db to null
                    assert.sameDeepMembers(SetTests.SetMObjectsOnArray(""), arrayData);
                    
                    //set db to {}
                    RefTests.RefBlank({});
                    assert.deepEqual(SetTests.SetMObjectsOnArray("/users/1"), {users: {1: arrayData}});
                    assert.deepEqual(SetTests.SetMObjectsOnArray("/users/2"), {users: {1: arrayData, 2: arrayData}});
                    assert.deepEqual(SetTests.SetMObjectsOnArray("/users/version"), {users: {1: arrayData, 2: arrayData, version: arrayData}});
                    assert.throws(()=>SetTests.SetMObjectsOnArray("/users/1/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                    assert.throws(()=>SetTests.SetMObjectsOnArray("/users/2/neighbour/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                });

                it('set multiple objects with array', ()=>{

                    let arrayData = SetTests.SetMObjectsWithArrayOnArrayData;

                    assert.sameDeepMembers(SetTests.SetMObjectsWithArrayOnArray("/"), arrayData);
                    //set db to null
                    assert.sameDeepMembers(SetTests.SetMObjectsWithArrayOnArray(""), arrayData);
                    
                    //set db to {}
                    RefTests.RefBlank({});
                    assert.deepEqual(SetTests.SetMObjectsWithArrayOnArray("/users/1"), {users: {1: arrayData}});
                    assert.deepEqual(SetTests.SetMObjectsWithArrayOnArray("/users/2"), {users: {1: arrayData, 2: arrayData}});
                    assert.deepEqual(SetTests.SetMObjectsWithArrayOnArray("/users/version"), {users: {1: arrayData, 2: arrayData, version: arrayData}});
                    assert.throws(()=>SetTests.SetMObjectsWithArrayOnArray("/users/1/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                    assert.throws(()=>SetTests.SetMObjectsWithArrayOnArray("/users/2/neighbour/name"), `${scope} You can't set reference on an array, try converting it to an object!`);
                })
        })

        describe('arrays with multiple object data tests:', ()=>{


            it('set nulled arrays on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsWithArrayNullValueOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsWithArrayNullOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsWithArrayNullOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNullOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNullOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNullOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNullOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNullOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            })

            it('set numbered arrays on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsWithArrayNumberValueOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsWithArrayNumberValueOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsWithArrayNumberValueOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNumberValueOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNumberValueOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNumberValueOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNumberValueOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayNumberValueOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            });


            it('set booleaned arrays on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsWithArrayBooleanValueOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsWithArrayBooleanOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsWithArrayBooleanOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsWithArrayBooleanOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayBooleanOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayBooleanOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayBooleanOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayBooleanOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            })

            it('set stringed arrays on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsWithArrayStringValueOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsWithArrayStringOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsWithArrayStringOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsWithArrayStringOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayStringOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayStringOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayStringOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayStringOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            })

            it('set complex objected arrays on multiple objects', ()=>{


                let multipleObjectData = SetTests.SetMObjectsWithArrayMObjectsComplexValuesOnObjectData;

                assert.deepEqual(SetTests.SetMObjectsWithArrayMObjectsComplexOnObject("/"), {...multipleObjectData});
                //set db to null
                assert.deepEqual(SetTests.SetMObjectsWithArrayMObjectsComplexOnObject(""), {...multipleObjectData});
                
                //set db to {}
                RefTests.RefBlank({});
                assert.deepEqual(SetTests.SetMObjectsWithArrayMObjectsComplexOnObject("/users/1"), {users: {1: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayMObjectsComplexOnObject("/users/2"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayMObjectsComplexOnObject("/users/version"), {users: {1: {...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayMObjectsComplexOnObject("/users/1/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: {...multipleObjectData}, version: {...multipleObjectData}}});
                assert.deepEqual(SetTests.SetMObjectsWithArrayMObjectsComplexOnObject("/users/2/neighbour/name"), {users: {1: {name: {...multipleObjectData}, ...multipleObjectData}, 2: { neighbour: {name: {...multipleObjectData}}, ...multipleObjectData}, version: {...multipleObjectData}}});
            })
            
        })

    })


    describe('Get tests:', ()=>{


        it('can get projects', ()=>{
            //set db to some complex data
            RefTests.RefBlank(GetTests.GetTestData);
            
            assert.deepEqual(GetTests.GetProjects(), GetTests.GetTestData);
        });

        it('can get project', ()=>{
            //set db to some complex data
            RefTests.RefBlank(GetTests.GetTestData);

            assert.deepEqual(GetTests.GetProject(1), GetTests.GetTestData['project1']);
            assert.deepEqual(GetTests.GetProject(2), GetTests.GetTestData['project2']);

        });

        it('can get project api version', ()=>{
            //set db to some complex data
            RefTests.RefBlank(GetTests.GetTestData);

            assert.equal(GetTests.GetApiVersion(1), GetTests.GetTestData.project1.apiVersion);
            assert.equal(GetTests.GetApiVersion(2), GetTests.GetTestData.project2.apiVersion);

        })

        it('can get project users', ()=>{
            //set db to some complex data
            RefTests.RefBlank(GetTests.GetTestData);

            assert.sameDeepMembers(GetTests.GetUsers(1), GetTests.GetTestData.project1.users);
            assert.sameDeepMembers(GetTests.GetUsers(2), GetTests.GetTestData.project2.users);

        })

        it('can get project user of users', ()=>{
            //set db to some complex data
            RefTests.RefBlank(GetTests.GetTestData);

            assert.deepEqual(GetTests.GetUser(1), GetTests.GetTestData.project1.users[0]);
            assert.deepEqual(GetTests.GetUser(2), GetTests.GetTestData.project2.users[0]);

        })

    });


    describe('Modify tests:', ()=>{


        it(`can't give null value to modify `, ()=>{
            //set db to some complex data
            RefTests.RefBlank(ModifyTests.ModifyTestData);
            
            assert.throws(ModifyTests.ModifyNullCase, `${scope} Null value passed as a callback. Please give a callback!`);
        });

        it('can modify projects', ()=>{
            //set db to some complex data
            RefTests.RefBlank(ModifyTests.ModifyTestData);

            let projects = JSON.parse(JSON.stringify(ModifyTests.ModifyTestData));

            projects.project1.apiVersion = 2.5;
            projects.project1.users[0].books[1] = 'modified';

            assert.deepEqual(ModifyTests.ModifyProjects(), projects);
        });

        it('can modify project', ()=>{
            //set db to some complex data
            RefTests.RefBlank(ModifyTests.ModifyTestData);


            let projects = JSON.parse(JSON.stringify(ModifyTests.ModifyTestData));

            let {project1,project2} = projects;

            project1.apiVersion = 2.5;
            project1.users[1].age = 38;

            project2.apiVersion = 2.5;
            project2.users[1].age = 38;

            assert.deepEqual(ModifyTests.ModifyProject(1), project1);
            assert.deepEqual(ModifyTests.ModifyProject(2), project2);

        });

        it('can modify project api version', ()=>{
            //set db to some complex data
            RefTests.RefBlank(ModifyTests.ModifyTestData);

            let projects = JSON.parse(JSON.stringify(ModifyTests.ModifyTestData));

            let {project1,project2} = projects;

            let apiVersion1 = project1.apiVersion;
            let apiVersion2 = project2.apiVersion;

            apiVersion1 = 2.5;
            apiVersion2 = 2.5;


            assert.equal(ModifyTests.ModifyApiVersion(1), apiVersion1);
            assert.equal(ModifyTests.ModifyApiVersion(2), apiVersion2);

        })

        it('can modify project users', ()=>{
            //set db to some complex data
            RefTests.RefBlank(ModifyTests.ModifyTestData);

            let projects = JSON.parse(JSON.stringify(ModifyTests.ModifyTestData));

            let {project1,project2} = projects;

            let users1 = project1.users;
            let users2 = project2.users;

            users1.push({
                name: 'new user',
                age: 34,
                books: null
            })

            users2.push({
                name: 'new user',
                age: 34,
                books: null
            })


            assert.sameDeepMembers(ModifyTests.ModifyUsers(1), users1);
            assert.sameDeepMembers(ModifyTests.ModifyUsers(2), users2);

        })

        it('can modify project user of users', ()=>{
            //set db to some complex data
            RefTests.RefBlank(ModifyTests.ModifyTestData);

            let projects = JSON.parse(JSON.stringify(ModifyTests.ModifyTestData));

            let {project1,project2} = projects;

            let user1 = project1.users[0];
            let user2 = project2.users[0];

            user1.name = 'modified name';
            user1.newData = true;

            user2.name = 'modified name';
            user2.newData = true;

            assert.deepEqual(ModifyTests.ModifyUser(1), project1.users);
            assert.deepEqual(ModifyTests.ModifyUser(2), project2.users);

        })

    })
})