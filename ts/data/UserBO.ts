class UserBO {
    name:string
    password:string
    confirmPwd:string

    constructor(name:string,pwd:string = "",conformPwd:string = ""){
        this.name = name
        this.password = pwd
        this.confirmPwd = conformPwd
    }
}

export = UserBO