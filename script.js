let form = document.getElementById("add_new_product");
let productBox = document.getElementById("productBox");
function formatText(value) {
    if (!value) return "";
    return value
        .replace(/_/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let p_name = document.getElementById("p_name").value;
    let p_price = document.getElementById("p_price").value;
    let p_description = document.getElementById("p_description").value;
    let p_category = document.getElementById("p_category").value;

    let p_rating_el = document.querySelector('input[name="p_rating"]:checked');
    let p_rating = p_rating_el ? p_rating_el.value : "0";

    let p_warranty_period = document.getElementById("p_warranty_period").value;
    let p_company_name = document.getElementById("p_company_name").value;
    let p_return_policy = document.getElementById("p_return_policy").value;

    let imageInput = document.getElementById("p_image");

    // Default image
    let imageSrc = "https://picsum.photos/200";

    if (imageInput.files && imageInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            imageSrc = e.target.result;
            renderProduct(imageSrc);
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        renderProduct(imageSrc);
    }

    function renderProduct(img) {
        productBox.innerHTML = `
            <div class="productBoxContent">
                <img src="${img}" class="product-img" />
                <h3>${formatText(p_name)}</h3>
                <p><strong>Price:</strong> ₹${p_price}</p>
                <p><strong>Description</strong>${formatText(p_description)}</p>
                ${p_category ? `<p><strong>Category:</strong> ${formatText(p_category)}</p>` : ""}
                <p class="rating">${"★".repeat(p_rating)}</p>
                <p><strong>Warranty:</strong> ${formatText(p_warranty_period)}</p>
                <p><strong>Company:</strong> ${formatText(p_company_name)}</p>
                <p><strong>Return Policy:</strong> ${formatText(p_return_policy)}</p>
            </div>
        `;
    }
});
