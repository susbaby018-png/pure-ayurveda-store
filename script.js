const products = [
{
name:"Shilajit Gold Resin",
price:39,
images:[
"https://images.unsplash.com/photo-1615485291234-7e2f8e0c7c5d",
"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
"https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
"https://images.unsplash.com/photo-1580281657527-47a4dcb11f8f",
"https://images.unsplash.com/photo-1615486363299-5c96e65e6a85",
"https://images.unsplash.com/photo-1615485737651-9f9e3b2a644d"
],
desc:"Pure Himalayan Shilajit for strength and stamina."
},
{
name:"Ashwagandha Capsules",
price:24,
images:[
"https://images.unsplash.com/photo-1580281657527-47a4dcb11f8f",
"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
"https://images.unsplash.com/photo-1615485291234-7e2f8e0c7c5d",
"https://images.unsplash.com/photo-1615485737651-9f9e3b2a644d",
"https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
"https://images.unsplash.com/photo-1615486363299-5c96e65e6a85",
"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
],
desc:"Reduce stress & boost performance."
}
];

const grid = document.getElementById("products");

products.forEach(p=>{
const card=document.createElement("div");
card.className="card";
card.innerHTML=`
<img src="${p.images[0]}">
<h3>${p.name}</h3>
<p>$${p.price}</p>
<button onclick="openProduct('${p.name}')">View</button>
`;
grid.appendChild(card);
});

function openProduct(name){
alert(name+" product page coming next step 🙂");
}