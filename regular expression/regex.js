
// re.test(txt) Boolean
// re[Symbol.match](txt) null or Array
// re[Symbol.replace](txt) new String
// str.match(re) null or Array
// str.replace(re) new String
// str.search(re) -1 or first match



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnSearch').addEventListener('click', doSearch);
    document.getElementById('btnReplace').addEventListener('click', doReplace);
});
function doSearch(ev) {
    ev.preventDefault();
    let re = new RegExp(document.getElementById('find').value, 'g');
    let txt = document.querySelector('.content').textContent;
    let output = document.querySelector('.output');
    // if(re.test(txt)) {
    //     output.innerHTML = 'Found';
    // } else {
    //     output.innerHTML = 'Not Found';
    // }
    let match = txt.match(re);
    if(match){
        output.innerHTML = `Found ${match.length} matches `;
    }
    else{
        output.innerHTML = 'Not Found';
    }


}

function doReplace(ev) {
    ev.preventDefault();
    let re = new RegExp(document.getElementById('find').value, 'g');
    let txt = document.querySelector('.content').textContent;
    let replace = document.getElementById('replace').value;
    let output = document.querySelector('.output');
    document.querySelector('.content').textContent = txt.replace(re,replace);
     output.innerHTML = "Replaced completed";

}