import React from "react";


const StreamChoice = ({ country }) => {

    let whichCountryGroup = 0;

    let allNotUS = ['ES', 'NL', 'GB', 'CH', 'DK', 'SE', 'NO', 'IT', 'CA', 'PT', 'MX', 'FI', 'BE', 'AT', 'DE', 'FR', 'BR', 'CL', 'AR', 'NZ', 'AU'];

    let notDisney = ['IE', 'PL', 'LV', 'IN', 'GR', 'RU', 'EE', 'TH', 'PH', 'SG', 'JP', 'ZA'];

    let notNetflixOrDisney = ['UA', 'BG', 'CY', 'AE', 'AZ', 'VN', 'IL', 'HK', 'PA', 'MD'];

    // let notDisneyOrMubi = ['CZ'];

    let mubiAndPrime = ['MK', 'RS', 'TN'];

    let disneyMubiPrime = ['RO', 'TR'];

    // let disneyAndPrime = ["CO"];

    // let prime = ['IS'];

    let netflix = ['HU', 'EC', 'ID', 'KR', 'LT', 'MY', 'PE', 'VE'];
    

    for (let i = 0; i < allNotUS.length; i++) {
        const element = allNotUS[i];
        if (country === element) {
            whichCountryGroup = 1;
        }
    };
    for (let j = 0; j < notDisney.length; j++) {
        const element = notDisney[j];
        if (country === element) {
            whichCountryGroup = 2;
        }
    };
    for (let k = 0; k < notNetflixOrDisney.length; k++) {
        const element = notNetflixOrDisney[k];
        if (country === element) {
            whichCountryGroup = 3;
        }
    };

    if (country === 'CZ') {
        whichCountryGroup = 4;
    }

    for (let t = 0; t < mubiAndPrime.length; t++) {
        const element = mubiAndPrime[t];
        if (country === element) {
            whichCountryGroup = 5;
        }
    };
    for (let s = 0; s < disneyMubiPrime.length; s++) {
        const element = disneyMubiPrime[s];
        if (country === element) {
            whichCountryGroup = 6;
        }
    };
    if (country === 'CO') {
        whichCountryGroup = 7;
    }

    if (country === 'IS') {
        whichCountryGroup = 8;
    }

    for (let d = 0; d < netflix.length; d++) {
        const element = netflix[d];
        if (country === element) {
            whichCountryGroup = 9;
        }
    };

    
    if (whichCountryGroup === 1) {
        return (
            <>
            <option>Apple</option>
            <option>Disney</option>
            <option>Mubi</option>
            <option>Netflix</option>
            <option>Prime</option>
            </>
        )
    } else if (whichCountryGroup === 2) {
        return(
            <>
            <option>Apple</option>
            <option>Mubi</option>
            <option>Netflix</option>
            <option>Prime</option>
            </>
        )
    } else if (whichCountryGroup === 3) {
        return(
            <>
            <option>Apple</option>
            <option>Mubi</option>
            <option>Prime</option>
            </>
        )
    }else if (whichCountryGroup === 4) {
        return(
            <>
            <option>Apple</option>
            <option>Netflix</option>
            <option>Prime</option>
            </>
        )
    }else if (whichCountryGroup === 5) {
        return(
            <>
            <option>Mubi</option>
            <option>Prime</option>
            </>
        )
    }else if (whichCountryGroup === 6) {
        return(
            <>
            <option>Disney</option>
            <option>Mubi</option>
            <option>Prime</option>
            </>
        )
    }else if (whichCountryGroup === 7) {
        return(
            <>
            <option>Disney</option>
            <option>Prime</option>
            </>
        )
    }else if (whichCountryGroup === 8) {
        return(
            <>
            <option>Prime</option>
            </>
        )
    }else if (whichCountryGroup === 9) {
        return(
            <>
            <option>Netflix</option>
            </>
        )
    }else {
        return(
            <>
            <option>Apple</option>
            <option>Disney</option>
            <option>HBO</option>
            <option>Hulu</option>
            <option>Mubi</option>
            <option>Netflix</option>
            <option>Paramount</option>
            <option>Peacock</option>
            <option>Prime</option>
            <option>Showtime</option>
            <option>Starz</option>
            </>
        )
    }
    
}

export default StreamChoice;