enum PlayersPair {
  NS,
  EW,
}

enum InVulnerable {
  vulnerable,
  invulnerable,
}

enum GameSuit {
  clubs,
  diamonds,
  hearts,
  spades,
  noTrump,
}

enum Double {
  double,
  redouble,
  none,
}

function isMinorSuit(suit: GameSuit): boolean {
  return suit === GameSuit.diamonds || suit === GameSuit.clubs;
}

function isMajorSuit(suit: GameSuit): boolean {
  return suit === GameSuit.hearts || suit === GameSuit.spades;
}

type Trick = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

class GameResult {
  vulnerable: InVulnerable;

  suit: GameSuit;

  double: Double;

  constructor(
    playing: PlayersPair,
    vulnerable: PlayersPair[],
    suit: GameSuit,
    playingSidePC: number,
    double: Double,
    contractTricks: Trick,
    actualTricks: Trick
  ) {
    this.playing = playing;
    this.vulnerable = vulnerable;
    this.suit = suit;
    this.playingSidePC = playingSidePC;
    this.double = double;
  }
}
