import React from 'react'
import { Client, Account, ID } from "appwrite";  // 1. import from appwrite/auth docs
import config from '../config/config';



// 2. create class
export class AuthService{
    client = new Client();
    account;

    // 4. create constructor
    constructor(){
        this.client
                .setEndpoint(config.appWriteUrl)
                .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    //5. call all services of appwrite dynamically (used 'asyn' and 'await')
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // 7. call login function 
            if (userAccount) {
                return this.login({email, password});
            } else {
                
            }
            
        } catch (error) {
            throw error;
        }
    }

    //6. login
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            throw error;
        }
    }

    // 8. get Current user details
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: get Current User :: error", error);
        }
        return null;
    }

    // 9. logout
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error", error);
        }
    }
}

//3. create object for our class
const authService = new AuthService();


export default authService;  //instead of export deafult of class we have exported our object to get data in simple form using '.'
