const images = document.querySelectorAll(".images");
console.log(images)

function download(i){
	const download = document.createElement('a');
	const section = images[i].parentElement.parentElement;
	if (section.classList.contains('download-link') == false){
		downloadDiv = document.createElement('div')
		downloadDiv.classList.toggle('container-link')
		download.textContent = 'Download Image'
		download.classList.toggle('download')
		download.setAttribute('href', `../assets/bottle_${i}.jpg`)
		download.setAttribute('download', `images${i}.jpg`)
		downloadDiv.append(download)
		section.append(downloadDiv)
	} else {
		section.removeChild(section.lastChild);
	}	
		section.classList.toggle('download-link')
}
for(let i = 0; i < images.length; i++){
	images[i].addEventListener('click',e => {
		console.log(download(i))
		console.log('diclick', images[i])
		e.preventDefault();
	})
}


