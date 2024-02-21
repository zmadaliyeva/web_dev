const API_URL = "https://fakestoreapi.com/products"

const productsLinks = [
    "",
    "https://www.amazon.com/Fjallraven-Foldsack-No-Daypack-Black/dp/B00BHZU8X6/ref=sr_1_1?crid=3Q1ZE7CBPZY3Z&keywords=Fjallraven%2B-%2BFoldsack%2BNo.%2B1%2BBackpack%2C%2BFits%2B15%2BLaptops&qid=1708193283&sprefix=fjallraven%2B-%2Bfoldsack%2Bno.%2B1%2Bbackpack%2C%2Bfits%2B15%2Blaptops%2Caps%2C242&sr=8-1&th=1",
    "https://www.amazon.com/H2H-Casual-T-Shirts-Henley-Baseball/dp/B09HC324ML",
    "https://www.amazon.com/Military-Jacket-Washing-Cotton-Leisure/dp/B0CFQPBJCN",
    "https://www.amazon.com/H2H-Casual-T-Shirts-DARKBLUE-KMTTL0374/dp/B017XIFW54?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1FWALUW7JMUM2",
    "https://www.amazon.com/John-Hardy-Legends-Station-Bracelet/dp/B085P23LYT?th=1",
    "https://www.amazon.com/HAFEEZ-CENTER-Eternity-Moissanite-White-Gold/dp/B0736YHHRD/ref=sr_1_3?crid=1A37MYZSYRMX8&keywords=Solid%2BGold%2BPetite%2BMicropave&qid=1708193777&sprefix=solid%2Bgold%2Bpetite%2Bmicropave%2Caps%2C240&sr=8-3&th=1",
    "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3NDQyMDY5MTAyNDY1MDQ3OjE3MDgxOTM4NjY6c3BfYXRmOjIwMDAyMDM4MDM3MjkxMTo6MDo6&url=%2FPairs-Plated-Princess-Zirconia-Earring%2Fdp%2FB07YTHY8YB%2Fref%3Dsr_1_4%3Fcrid%3DIYP07EZVBVZW%26keywords%3DWhite%2BGold%2BPlated%2BPrincess%26qid%3D1708193866%26sprefix%3Dwhite%2Bgold%2Bplated%2Bprincess%252Caps%252C241%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
    "https://www.amazon.com/Pierced-Owl-Plated-Stainless-Earrings/dp/B07NPX3QYN/ref=sr_1_2?crid=3QBDKVY52GIWG&keywords=Pierced%2BOwl%2BRose%2BGold%2BPlated%2BStainless%2BSteel%2BDouble&qid=1708193931&sprefix=pierced%2Bowl%2Brose%2Bgold%2Bplated%2Bstainless%2Bsteel%2Bdouble%2Caps%2C258&sr=8-2&th=1",
    "https://www.amazon.com/Western-Digital-Elements-Portable-External/dp/B06W55K9N6/ref=sr_1_1?crid=4MFMELNXWYQG&keywords=WD+2TB+Elements+Portable+External+Hard+Drive+-+USB+3.0&qid=1708193960&sprefix=wd+2tb+elements+portable+external+hard+drive+-+usb+3.0%2Caps%2C252&sr=8-1",
    "https://www.amazon.com/SanDisk-SSD-PLUS-Internal-SDSSDA-1T00-G27/dp/B09NQJMW28/ref=sr_1_2?crid=329XMVGJK1TXA&keywords=SanDisk+SSD+PLUS+1TB+Internal+SSD+-+SATA+III+6+Gb%2Fs&qid=1708193993&sprefix=sandisk+ssd+plus+1tb+internal+ssd+-+sata+iii+6+gb%2Fs%2Caps%2C436&sr=8-2",
    "https://www.amazon.com/Silicon-Power-Performance-Internal-SP256GBSS3A55S25/dp/B075RJS55D/ref=sr_1_2?crid=357B9T8T3MEIT&keywords=Silicon+Power+256GB+SSD+3D+NAND+A55+SLC+Cache+Performance+Boost+SATA+III+2.5&qid=1708194036&sprefix=silicon+power+256gb+ssd+3d+nand+a55+slc+cache+performance+boost+sata+iii+2.5%2Caps%2C234&sr=8-2",
    "https://www.amazon.com/Gaming-Drive-Playstation-Portable-External/dp/B094W83QRM/ref=sr_1_1?crid=30FLS8SYQCI50&keywords=WD+4TB+Gaming+Drive+Works+with+Playstation+4+Portable+External+Hard+Drive&qid=1708194165&sprefix=wd+4tb+gaming+drive+works+with+playstation+4+portable+external+hard+drive+%2Caps%2C245&sr=8-1",
    "https://www.amazon.com/Acer-SB220Q-Ultra-Thin-Frame-Monitor/dp/B07CVL2D2S/ref=sr_1_1?crid=DG003AMS5M3V&keywords=Acer+SB220Q+bi+21.5+inches+Full+HD+%281920+x+1080%29+IPS+Ultra-Thin&qid=1708194206&sprefix=acer+sb220q+bi+21.5+inches+full+hd+1920+x+1080+ips+ultra-thin%2Caps%2C257&sr=8-1",
    "https://www.amazon.com/XG49VQ-Curved-Gaming-FreeSync-Monitor/dp/B07PZR2YY4/ref=sr_1_3?crid=1Z65V8C5I84Z1&keywords=Samsung+49-Inch+CHG90+144Hz+Curved+Gaming+Monitor+%28LC49HG90DMNXZA%29+%E2%80%93+Super+Ultrawide+Screen+QLED&qid=1708194236&sprefix=samsung+49-inch+chg90+144hz+curved+gaming+monitor+lc49hg90dmnxza+super+ultrawide+screen+qled+%2Caps%2C242&sr=8-3",
    "https://www.amazon.com/MAGCOMSEN-Winter-Detachable-Waterproof-Outdoor/dp/B07ZHXQGV3/ref=sr_1_8?crid=18RT70WAFZ0S1&keywords=BIYLACLESEN+Women%27s+3-in-1+Snowboard+Jacket+Winter+Coats&qid=1708194291&sprefix=biylaclesen+women%27s+3-in-1+snowboard+jacket+winter+coats%2Caps%2C235&sr=8-8",
    "https://www.amazon.com/WJC663-Womens-Removable-Hoodie-Motorcyle/dp/B00O5D5E5Y/ref=sr_1_1?crid=DKKKG6TSXDWE&keywords=Lock+and+Love+Women%27s+Removable+Hooded+Faux+Leather+Moto+Biker+Jacket&qid=1708194388&sprefix=lock+and+love+women%27s+removable+hooded+faux+leather+moto+biker+jacket%2Caps%2C428&sr=8-1",
    "https://www.amazon.com/Twinklady-Windbreaker-Raincoats-Waterproof-Lightweight/dp/B07RYK5N9H/ref=sr_1_2?crid=WIM8XKTG2KXI&keywords=%22Rain+Jacket+Women+Windbreaker+Striped+Climbing+Raincoats%22&qid=1708194417&sprefix=rain+jacket+women+windbreaker+striped+climbing+raincoats+%2Caps%2C422&sr=8-2",
    "https://www.amazon.com/Made-Johnny-WT1037-Sleeve-Shirring/dp/B019X2H0BC/ref=sr_1_2?crid=3GQXPA0A6V7FX&keywords=MBJ+Women%27s+Solid+Short+Sleeve+Boat+Neck+V&qid=1708194450&sprefix=mbj+women%27s+solid+short+sleeve+boat+neck+v+%2Caps%2C228&sr=8-2",
    "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2NzMwNTcyMzAyOTkzMDQ3OjE3MDgxOTQ0ODY6c3BfYXRmOjIwMDExOTEwMTA2ODM5ODo6MDo6&url=%2FOpna-Moisture-Wicking-Athletic-XXXX-Large%2Fdp%2FB015TC8OS8%2Fref%3Dsr_1_1%3Fcrid%3D3V8YEVGALIMXX%26keywords%3DOpna%2BWomen%2527s%2BShort%2BSleeve%2BMoisture%26qid%3D1708194486%26sprefix%3Dopna%2Bwomen%2527s%2Bshort%2Bsleeve%2Bmoisture%252Caps%252C234%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
    "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2NjMxMTE0NTYwNDE4MDQ3OjE3MDgxOTQ1MDk6c3BfYXRmOjIwMDAxODQ5NzQ3OTg2MTo6MDo6&url=%2FDANVOUY-Womens-Graphic-T-Shirt-XX-Large%2Fdp%2FB07FKT5J3C%2Fref%3Dsr_1_1%3Fcrid%3D4YD0UNB5SQ46%26keywords%3DDANVOUY%2BWomens%2BT%2BShirt%2BCasual%2BCotton%2BShort%26qid%3D1708194509%26sprefix%3Ddanvouy%2Bwomens%2Bt%2Bshirt%2Bcasual%2Bcotton%2Bshort%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
]

const loadProducts = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

const showProducts = async () => {
    const products = await loadProducts()
    const containerDiv = document.querySelector(".container")
    containerDiv.innerHTML = ""

    for(let element of products){
        containerDiv.innerHTML += `
            <div class="card">
                <a href="${productsLinks[element.id]}">
                    <div class="image" style="background-image: url(${element.image})"></div>
                    <p class="title">${element.title.substring(0, 20)}...</p>
                    <p class="description">${element.description.substring(0, 60)}...</p>
                    <p class="price">
                        <span class="rating">${element.rating.rate}</span>
                        <span>${element.price} KZT</span>
                    </p>                
                </a>

                <button class="btn" onclick="redirectToWhatsApp(${element.id})">Share</button>
            </div>
        `
    };
}
function redirectToWhatsApp(index) {
    var whatsappNumber = '+77007276950';
    var productLink = productsLinks[index];
    var whatsappMessage = encodeURIComponent('Здравствуйте! Я заинтересован(-a) в вашем товаре: ' + productLink);
    var whatsappURL = 'https://wa.me/' + whatsappNumber + '?text=' + whatsappMessage;
    
    window.open(whatsappURL);
}

showProducts()