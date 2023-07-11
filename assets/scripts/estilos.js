
const reset = document.createElement('link');
reset.rel = 'styleSheet';
reset.href = './assets/styles/reset.css';


const styles = document.createElement('link'); /* SERVE PARA LINkAR TODAS AS PAGINAS SEM PRECISAR POR LINK  rel stylesheet EM TODAS AS PAGINAS. */
styles.setAttribute('rel', 'styleSheet');
styles.setAttribute('href', './assets/styles/style.css');


    const linkGoogleFontes = document.createElement('link');
    linkGoogleFontes.rel = 'preconnect';
    linkGoogleFontes.href = 'https://fonts.googleapis.com';

    const continuacaoFontStatic = document.createElement('link');
    continuacaoFontStatic.rel = 'preconnect';
    continuacaoFontStatic.href = 'https://fonts.gstatic.com';
    continuacaoFontStatic.crossorigin = '';

        const terceiraParteFontRoboto = document.createElement('link');
        terceiraParteFontRoboto.rel = 'stylesheet';
        terceiraParteFontRoboto.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,400;1,200;1,400&display=swap';

        const terceiraPartOutraLetraIndie = document.createElement('link');
        terceiraPartOutraLetraIndie.rel = 'stylesheet';
        terceiraPartOutraLetraIndie.href = 'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap';

        const terceiraPartOutraLetraUbuntu = document.createElement('link');
        terceiraPartOutraLetraUbuntu.rel = 'stylesheet';
        terceiraPartOutraLetraUbuntu.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap';
       

        document.head.append(reset, linkGoogleFontes, continuacaoFontStatic, terceiraParteFontRoboto, terceiraPartOutraLetraIndie, styles);
      







