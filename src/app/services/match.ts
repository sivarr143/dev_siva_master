export interface Match {
    // id : number;
    matchDate : Date;
    city : string;
    venue : string;
    firstTeam : string;
    secondTeam : string;
    winner : string;
    
    manOftheMatch : string;
    neutralVenue : any;
    tossWinner : string;
    tossDecision : string;
    result : string;
    resultMargin : number;
    eliminator : any;
    method : string;
    umpireOne : string;
    umpireTwo : string;
    match : Match;
    inning : number;
    over : number;
    ball: number;
    batsman : string;
    nonStriker : string;
    bowler : string;
    batsmanRuns : number;
    extraRuns : number;
    totalRuns : number;
    nonBoundary : any;
    wicket : any;
    dismissalKind : string;
    playerDismissed : string;
    fielder : string;
    extrasType : string;
    battingTeam : string;
    bowlingTeam : string;
}
