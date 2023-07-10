
const reset = document.createElement('link');
reset.rel = 'StyleSheet';
reset.href = './assets/style/reset.css';


const styles = document.createElement('link'); /* SERVE PARA LINkAR TODAS AS PAGINAS SEM PRECISAR POR LINK  rel stylesheet EM TODAS AS PAGINAS. */
styles.setAttribute('rel', 'StyleSheet');
styles.setAttribute('href', './assets/styles/style.css');


    const linkGoogleFontes = document.createElement('Link');
    linkGoogleFontes.rel = 'preconnect';
    linkGoogleFontes.href = 'https://fonts.googleapis.com';

    const continuacaoFontStatic = document.createElement('Link');
    continuacaoFontStatic.rel = 'preconnect';
    continuacaoFontStatic.href = 'https://fonts.gstatic.com';

        const terceiraParteFontRoboto = document.createElement('Link');
        terceiraParteFontRoboto.rel = 'stylesheet';
        terceiraParteFontRoboto.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,400;1,200;1,400&display=swap';

        const terceiraPartOutraLetraIndie = document.createElement('link');
        terceiraPartOutraLetraIndie.rel = 'stylesheet';
        terceiraPartOutraLetraIndie.href = 'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap';

        document.head.append(reset, linkGoogleFontes, continuacaoFontStatic, terceiraParteFontRoboto, terceiraPartOutraLetraIndie, styles);
      







