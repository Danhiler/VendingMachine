export class ClientApi {
    static baseUrl = 'http://localhost:4000';

    static getData() {
        return this.get('/getData')
    }

    static addInventory(product) {
        return this.post('/addInventory',product)
    }
    static purchaseProduct(product) {
        return this.post('/purchase', product)
    }


    static get(url) {
        return fetch(this.baseUrl + url)
            .then(res=>res.json())
    }

    static post(url, body) {
        return fetch(this.baseUrl + url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res)
            return res.json()
        });
    }

    static put(url, body) {
        return fetch(this.baseUrl + url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }

    static delete(url, body) {
        return fetch(this.baseUrl + url+"/"+body, {
            method: 'DELETE'
        }).then(res => res.json());
    }
}