class UserBO {
    username:string
    password:string
    confirmPassword:string

    constructor(name:string,pwd:string = "",conformPwd:string = ""){
        this.username = name
        this.password = pwd
        this.confirmPassword = conformPwd
    }
}

export = UserBO