import { useEffect, useState } from 'react';

const Search = () => {

  const [searchText, setSearchText] = useState("");
  const typeSpeed = 150;
  const deleteSpeed = 75;

  useEffect(() => {
    const phrases = ["Front-end Deve", "Back-end Dev", "Passionate Full-Stack Developer"];
    const timeoutOne = phrases[0].length*typeSpeed + phrases[0].length*deleteSpeed;
    const timeoutTwo = phrases[1].length*typeSpeed + phrases[1].length*deleteSpeed + 200;

    setTimeout(() => {
      type(phrases[0], true);
      setTimeout(() => {
        type(phrases[1], true);
        setTimeout(() => {
          type(phrases[2], false);
        }, timeoutTwo);
      }, timeoutOne);
    }, 1500);

  }, [])

  const type = (word, deleteWord) => {
    
    for (let i = 0; i < word.length; i++) {

      setTimeout(() => {
        setSearchText(prevState => prevState + word.charAt(i))
      }, typeSpeed*i);
    }

    if (deleteWord) {
      const timeout = word.length * typeSpeed;
      setTimeout(() => {
        for (let i = 0; i < word.length; i++) {
          setTimeout(() => {
            setSearchText(prevState => prevState.substring(0, prevState.length-1))
          }, deleteSpeed*i);
        }
      }, timeout);
    }

  }

  const style={
    container: "text-center",
    banner: "text-white text-7xl mb-4",
    subText: "text-4xl",
    textInput: "shadow-2x1 rounded-l-full w-1/4 h-9 pl-4 text-gray-600 bg-gray-100",
    searchBtn: "rounded-r-full h-9 bg-white text-red-400 px-3 pr-4"
  };

  return(
    <div className={style.container} style={{marginTop: "-15em"}}>
      <h1 className={style.banner}>wanwari<span className={style.subText}>.ca</span></h1> 
      <input type="text" className={style.textInput} disabled value={searchText}/>
      <input type="submit" value="SE" className={style.searchBtn} />
    </div>
  );
}

export default Search;
