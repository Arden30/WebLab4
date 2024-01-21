import axios from "axios";

export default class service {

    static path = 'http://localhost:24730/api'

    static async signUpReq(username, password) {
        return await axios.post(this.path + '/register', {
            username: username,
            password: password,
        }).then(res => res.data);
    }

    static async signInReq(username, password) {
        return await axios.post(this.path + '/auth', {
            username: username,
            password: password,
        }).then(res => res.data);
    }

    static async removeHitsByUser(token) {
        await axios.delete(this.path + '/coordinates', {
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "Authorization": "Bearer " + token
            }
        })
    }

    static async sendHit(hit, token) {
        return axios.post(this.path + '/coordinates', {
            x: Number(hit.x),
            y: Number(hit.y),
            r: Number(hit.r),
        }, {
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "Authorization": "Bearer " + token
            }
        }).then(res => res.data)
    }

    static async getHitsForUser(token) {
        return await axios.get(this.path + '/coordinates', {
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "Authorization": "Bearer " + token
            }
        }).then(res => res.data);
    }
}