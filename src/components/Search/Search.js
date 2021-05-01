const Search = () => {

  const style={
    container: "text-center",
    banner: "text-white text-7xl",
    subText: "text-4xl",
    textInput: "shadow-2x1 rounded-l-full w-2/5 h-9 pl-4 text-gray-600",
    searchBtn: "rounded-r-full h-9 bg-white text-red-400 px-2"
  };

  return(
    <div className={style.container} style={{marginTop: "-15em"}}>
      <h1 className={style.banner}>wanwari<span className={style.subText}>.ca</span></h1> 
      <input type="text" className={style.textInput} disabled value="Java developer"/>
      <input type="button" value="SE" className={style.searchBtn} />
    </div>
  );
}

export default Search;
