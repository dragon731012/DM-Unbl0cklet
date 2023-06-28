var origincode = document.body.innerHTML;

document.body.innerHTML = "<div class='title'> <h1 id='title1'>DM Unblocker</h1> </div> <form class='searchbox' id='searchbox'> <input class='search' id='search' placeholder='Search the web freely' type='text'/> </form> <div class='icons'> <a href='https://github.com/dragon731012' target='_blank' rel='noopener'> <img src='https://dm-unbl0cker-static5.netlify.app/img/github.png' class='github' id='github'/> </a> <a href='https://discord.gg/hrXXUeWgrn' target='_blank' rel='noopener'> <img src='https://dm-unbl0cker-static5.netlify.app/img/discord.png' class='discord' id='discord'/> </a> </div><style>body{background-color:black;}.searchbox{ width:47%; height:7%; color: #FFFFFF; position: absolute; left:26.5%; top:50%; } .search{ text-align: center; background: transparent; border-radius: 18px; border-radius: 18px; border: 2px solid #FFFFFF; color: #FFFFFF; width:100%; height:100%; } .title{ font-family: 'Roboto', Arial, Helvetica, sans-serif; position: absolute; width: 100%; height: 100px; top:17%; float: center; align: center; text-align: center; color: #FFFFFF; } ::placeholder { margin: auto; color: #FFFFFF; font-size: 1.2em; } .icons{ align: center; text-align: center; position: absolute; width: 100%; height: 70px; bottom: 0%; left: 0%; } .github{ position: absolute; width:70px; height:70px; right:40%; opacity:0.5; } .discord{ position: absolute; height:100%; width:70px; height:58px; opacity:0.5; left:40%; top:8%; } .discord:hover{ opacity:1; } .github:hover{ opacity:1; } .x{ position: absolute; width:70px; height:70px; top:0px; right:0px; }</style>";

function isUrl(val = '') {
	if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
	return false;
}

const form = document.getElementById("searchbox");
const address = document.getElementById("search");
form.addEventListener("submit", async(event) => {
	event.preventDefault();
	if (!isUrl(address.value)) address.value = 'https://www.google.com/search?q=' + address.value;
	else if (!(address.value.startsWith('https://') || address.value.startsWith('http://'))) address.value = 'http://' + address.value;
	fetch('https://api.codetabs.com/v1/proxy?quest=' + address.value)
		.then(
			function(response) {
				if (response.status !== 200) {
					alert('there was a problem with your url.');
					return;
				}
				response.text().then(function(data) {
					document.body.innerHTML = data;
				});
			}
		)
		.catch(function(err) {
			alert('Fetch Error', err);
		});
});
