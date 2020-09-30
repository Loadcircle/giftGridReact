export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=eILCUAskAcPzXTBeMZDPlAg2eA2W8MSV`
    const response = await fetch(url);

    if(response.ok){
        const {data} = await response.json();
        
        const gifs = data.map(img=>{
            return {
                    id: img.id, 
                    title: img.title, 
                    url: img.images.downsized_medium.url
                }                
        });
        
        return gifs;
    }
}