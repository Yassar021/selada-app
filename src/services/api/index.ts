const BASE_URL = "http://fauzan.westus3.cloudapp.azure.com:5000"
// const BASE_URL = "http://localhost:5000"


export function uploadImage(name: string, email: string, phone: string, image: File) {
    let form = new FormData()

    form.append("name",name)
    form.append("email",email)
    form.append("phone",phone)
    form.append("image",image)

    return fetch(`${BASE_URL}/predict`,{
        method: "POST",
        body: form
    }).then(res => res.json());
}
