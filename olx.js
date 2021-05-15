let htmlCollection = document.getElementsByClassName('artikal');
let arr = [...htmlCollection];
let articles = [];

for (let i = 0; arr.length; i++) {
    articles.push(arr[i].id.substr(4, 12));
}

const obnovi = () => {
    for (let i = 0; i < articles.length; i++) {
        obnoviartikal_mojpik(articles[i]);
        console.log(`Artikal ${i+1} je uspješno obnovljen.`);
    }
}

obnovi();
