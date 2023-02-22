import styled from 'styled-components'

const FlameWrapper = styled.div`
    position: relative;
    width: 15rem;
    height: 10rem;
    transition: all .5s ease;
    transform-origin: 50% 70%;
    transform: ${props => props.burning ? 'scale(1)' : 'scale(3)'};
    opacity: ${props => props.burning ? 1 : 0};
    filter: ${props => !props.burning && 'blur(100px)'};
  
    .flame {
        position: absolute;
        left: 6.5rem;
    }
        
    .wht { 
        color: white; animation: burn-wht 1.8s; 
        box-shadow: 0 0 1rem white;}
    .ylw { 
        color: gold;  top: 1.8rem; animation: burn-ylw 1.6s; 
        box-shadow: 0 0 1rem gold; opacity: .9}
    .orng { 
        color: orange; top: 3.6rem; animation: burn-orng 0.4s; 
        box-shadow: 0 0 1rem orange; opacity: .8}
    .red { 
        color: crimson; top: 5.4rem; animation: burn-red 1s;
        opacity: .7;}
    
    .smoke { 
        color: black; top: 8.8rem;
        box-shadow: 0 0 2rem black;
        background-color: gray;
        position: relative;
        border-color: gray;
        width: .25rem;
        height: .25rem;
        top: 7rem;
        animation-name: burn-smoke;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;
    }
    
    .smk-1 {animation-duration: .5s; animation-name: burn-smoke-rev; left: .5rem;}
    .smk-2 {animation-duration: .6s; left: -.5rem;}
    .smk-3 {animation-duration: .7s; animation-name: burn-smoke-rev; left: 1rem;}
    .smk-4 {animation-duration: .8s; left: 1.5rem;}
    .smk-5 {animation-duration: .9s; left: 2rem;}
    
    .flm-part {
        background-color: currentColor;
        border-radius: 50%;
        position: relative;
        transform: rotate(60deg) skewX(0deg) scale(1);
        border-color: currentColor;
        width: 2rem;
        height: 2rem;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    
    .flm-part.flipped {
        transform: rotate(120deg) skewX(0deg) scale(1);
    }
    
    .flm-part::before {
        content: "";
        position: absolute;
        border-radius: 0 0 0 100%;
        border-bottom-style: solid;
        border-bottom-color: inherit;
        height: .5rem;
        width: 2rem;
        left: -1rem;
        top: -.5rem;
        border-bottom-width: 2rem;
    }
    
    .flm-part.flipped::before {
        border-radius: 100% 0 0 0;
        border-bottom: 0 solid transparent;
        border-top-style: solid;
        border-top-color: inherit;
        border-top-width: 2rem;
        height: .5rem;
        width: 2rem;
        left: -1rem;
        top: 0;
    }
    
    @keyframes burn-wht {
        0% { transform: rotate(60deg) skewX(0deg) scale(1)}
        20% { transform: rotate(50deg) skewX(-3deg) scale(1.1)}
        40% { transform: rotate(60deg) skewX(0deg) scale(1)}
        60% { transform: rotate(70deg) skewX(3deg) scale(1.1)}
        100% {transform: rotate(60deg) skew(0deg) scale(1)}
    }
    
    @keyframes burn-ylw {
        0% { transform: rotate(120deg) skewX(0deg) scale(1.4)}
        20% { transform: rotate(110deg) skewX(10deg) scale(1.5)}
        40% { transform: rotate(120deg) skewX(0deg) scale(1.4)}
        60% { transform: rotate(130deg) skewX(-10deg) scale(1.5)}
        100% {transform: rotate(120deg) skew(0deg) scale(1.4)}
    }
    
    @keyframes burn-orng {
        0% { transform: rotate(65deg) skewX(0deg) scale(1.6)}
        20% { transform: rotate(60deg) skewX(-15deg) scale(1.7)}
        40% { transform: rotate(65deg) skewX(0deg) scale(1.6)}
        60% { transform: rotate(70deg) skewX(2deg) scale(1.7)}
        100% {transform: rotate(65deg) skew(0deg) scale(1.6)}
    }
    
    @keyframes burn-red {
        0% { transform: rotate(120deg) skewX(0deg) scale(1.8)}
        20% { transform: rotate(118deg) skewX(5deg) scale(2)}
        40% { transform: rotate(120deg) skewX(0deg) scale(1.8)}
        60% { transform: rotate(122deg) skewX(-5deg) scale(2)}
        100% {transform: rotate(120deg) skew(0deg) scale(1.8)}
    }
    
    @keyframes burn-smoke {
        0% { transform: rotate(0deg) scale(1);  opacity: 1; }
        100% {transform: rotate(360deg) scale(4); opacity: 0; top: 0;}
    }
    
    @keyframes burn-smoke-rev {
        0% { transform: rotate(0deg) scale(1);  opacity: 1; }
        100% {transform: rotate(-360deg) scale(5); opacity: 0; top: 0;}
    }
`

const Flame = ({ burning=false }) => {
    return (
        <FlameWrapper burning={burning}>
            <div class="flame">
                <div class="smoke smk-1" />
                <div class="smoke smk-2" />
                <div class="smoke smk-3" />
                <div class="smoke smk-4" />
                <div class="smoke smk-5" />

                <div class="flm-part flipped red" />
                <div class="flm-part orng" />
                <div class="flm-part flipped ylw" />
                <div class="flm-part wht" />
            </div>
        </FlameWrapper>
    )
}

export default Flame