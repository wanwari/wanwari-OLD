const Footer = () => {

  const styles={
    container: "bg-gray-300 p-6 text-right",
    text: "lowercase"
  }

  return(
    <div className={styles.container}>
      <p className={styles.text}>&copy; 2021 Wiesa Anwari</p>
    </div>
  )
}

export default Footer;
