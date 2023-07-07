const styles = document.createElement('link'); /* SERVE PARA LINkAR TODAS AS PAGINAS SEM PRECISAR POR LINK  rel stylesheet EM TODAS AS PAGINAS. */

styles.setAttribute('rel', 'StyleSheet');
styles.setAttribute('href', './assets/styles/style.css');

document.head.appendChild(styles);

