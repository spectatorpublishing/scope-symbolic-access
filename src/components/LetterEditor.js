import React from 'react';
import styled from 'styled-components';

const LetterWrap = styled.div`
    padding-top:5vh;
    padding-bottom:5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    color: white;
    
    @media (max-width: 768px) {
        padding-left:4%;
        padding-right:4%;
    }

`;

const Title = styled.div`
    font-size: 5em;
    letter-spacing: 0.05em;
    padding:1vh 0 1vh 0;
    word-wrap:break-word;
    font-family: 'Lora,serif';

    @media (max-width: 768px) {
        font-size: 2em;
    }

`;

const Body = styled.div`
    font-size: 1.5em; 
    color: white;
    word-wrap:break-word;
    width:100%;
    font-family: 'Lora,serif';
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>LETTER FROM THE EDITOR</Title>
            <Body>
                <p>Dear reader,</p>

                <p>
                    As it concerns college campuses, access is not only a matter of space or architecture, but also a symbolic one. On Columbia’s campus, where controlled gate entry points and swipe systems currently mediate student movement, the symbolic nature of access is especially pronounced. The trivialities of daily campus life, such as tapping an ID and passing through checkpoints, can take on outsized meaning. Security implies a dual mandate: to ensure the safety of those inside and to determine who is kept out. 
                </p>

                <p>
                    In “Symbolic Access,” contributors to Spectator’s Opinion section examine the impact of regulated access to the highest institutional rung—an Ivy League campus situated in the heart of Manhattan. Drawing on four decades of op-eds, this compilation considers a tangle of issues surrounding access, including cross-campus dorm and building swipe entry, campus gate closures, and library access. Some writers critique the inefficiency and imprudence of campus security and swipe systems and contend that Columbia’s policies of access are truthfully policies of its inverse: exclusion. One article calls for universal swipe access, advocating for the democratization of Columbia dorm access for Barnard students. Another turns to the University’s protective outer layer, taking issue with the seemingly permanent closure of the Morningside Heights campus gates. Other writers laud the security systems, cumbersome as they may be, as long-overdue technological and safety improvements to campus life. 
                </p>

                <p>
                    As a graduating senior, “Symbolic Access” is both the final Scope of this semester and the final Scope I will produce. Its finality reflects the significance of the topic. Past and present discussions about campus access are consequential not only for Columbia, but for Spectator’s Opinion section as well. The Scope is, in and of itself, a project of access. What enters Spectator’s archive is a partial record of campus, and the pool of articles I have drawn from is only a fraction of that; in this way, the Scope is doubly fractious. Even so, the practice of archiving and returning to the archive must continue as a means of tracing the intellectual lineage of Spectator, making it more material. I leave Spectator excited to see The Scope continue beyond my time in the opinion section.
                </p>

                <p>Sincerely,</p>

                <p>Su Ertekin-Taner</p>

                <p>Deputy Editor of Projects </p>
            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;