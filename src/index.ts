

//                                          BİSMİLLAHİRRAHMANİRRAHİM








class LocalDb{
    
    private objectReferences: string[];
    private db: {[key:string]: any} = {};
    private currentRef: {[key:string]: any} = null;
    private scope = "@LocalDb:";
    private dbInitialized: boolean = false;


    constructor(){
    }

    private initializeDb(): void{
        this.dbInitialized = true;
        this.db = JSON.parse(localStorage.getItem("LocalDb")) || {};
    }
    

    public ref(reference: string): LocalDb{
        if(this.dbInitialized === false)    this.initializeDb();
        if(reference == null)  throw(`${this.scope} Please specify a reference! Null given.`);
        
        this.objectReferences = reference.split('/').filter(x => x.length != 0);


        return this.accessRef();
    }

    private accessRef(): LocalDb{
        let temp: {[key:string]: any} = this.db;

        if(this.objectReferences.length == 0)
            this.currentRef = temp;

        for (const objectReference of this.objectReferences) {
            if(temp[objectReference] == null){
                this.makeDb();
            }

            this.currentRef = temp;
            temp = temp[objectReference];

            if(Array.isArray(this.currentRef) && !Array.isArray(this.db)) throw("@LocalDb: You can't set reference on an array, try converting it to an object!")
        }

        return this;
    }
    
    private makeDb(): void{
        let temp: {[key:string]: any} = this.db;
        for (const objectReference of this.objectReferences) {
            if(temp[objectReference] == null)
                temp[objectReference] = {};
            temp = temp[objectReference];
        }
    }

    private setDb(data: {[key:string]: any}): void{

        if(this.objectReferences.length == 0){
            this.currentRef = data;
            this.db = this.currentRef;
        }
        else
            this.currentRef[this.objectReferences[this.objectReferences.length-1]] = data;
        localStorage.setItem("LocalDb", JSON.stringify(this.db));
    }

    public getDb(): any{
        if(this.dbInitialized === false)    this.initializeDb();
        
        return JSON.parse(localStorage.getItem("LocalDb"));
    }

    public set(data: {[key:string]: any}): void{
        try {
            if(this.dbInitialized === false)    this.initializeDb();

            this.setDb(data);
            
        } catch (error) {
            throw(error);
        }

    }

    public get(): any {
        if(this.dbInitialized === false)    this.initializeDb();
        
        if(this.objectReferences.length == 0){
            this.currentRef = this.db;
            return this.currentRef;
        }

        return this.currentRef[this.objectReferences[this.objectReferences.length-1]];
    }

    public modify(_callback: (data: any) => any ): any {
        if(this.dbInitialized === false)    this.initializeDb();

        if(_callback == null) throw(`${this.scope} Null value passed as a callback. Please give a callback!`)

        let result = _callback(this.get());
        if(result == null) throw(`${this.scope} Callback returns undefined. Please check your callback!`)

        this.set(result);

        return this.get();
    }
}


let singleton = new LocalDb();
module.exports = singleton;
