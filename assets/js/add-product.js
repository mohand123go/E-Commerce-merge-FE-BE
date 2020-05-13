


if (title.textContent == 'Add Product - online shop') {


    let slectColorAndImg = document.querySelector('.slectColorAndImg')
    let imagsAndColorsWrapers = document.querySelector('.imagsAndColorsWrapers')




    slectColorAndImg.onchange = () => {
        let opt = slectColorAndImg.options[slectColorAndImg.selectedIndex];
        let imageAndColor = `    <div class="imagAndColorWraper">
    <input type="file"  accept='image/*' name="imagesArray" placeholder="Select image" class="form-control" >


    <input type="color" name="color">
</div>
`
        let content = ''
        console.log(parseInt(opt.value))
        for (let i = 0; i < parseInt(opt.value); i++) {
            content += imageAndColor

        }
        imagsAndColorsWrapers.innerHTML = content
    }
}
