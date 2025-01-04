---
title: "EyeChess"
description: "Exploring the Intersection of Chess and Neural Networks"
date: 2024-01-03
banner:
  src: "eyechess.png"
  alt: "First Markdown Post"
  caption: ''
categories: 
  - Computer Science
  - Chess
  - Neural Networks
keywords: 
  - Traditional Chess Engines
  - Neural Network Chess Engines
  - Human Chess Analysis
---

# EyeChess
*By Shaurya Pathak - 4 min read · 4 hours ago*

As someone interested in both chess, and neural networks, it is interesting to analyze the differences between how humans and computers play. I will start by separating Neural Network based engines like Leela and AlphaZero and traditional chess engines like Stockfish 11. (Newer versions of Stockfish use a combination of Neural Networks and traditional methods, a bit more complicated but out of the scope of this project). Then I will try to emulate the way a human thinks about chess with computers with the overarching goal of creating a chess engine that is human. This is the beginning of a series where I will detail my journey to making this chess engine.

> Note: Some may believe that my project closely lines up with the Maia Chess, while the goal of the projects remain the same, the methodologies differ heavily. Maia chess uses human moves as training labels and attempts to predict the most human moves, while the goal of this model will be to make the best move using more human methods.

## Traditional Chess Engines
Traditional Chess Engines rely on raw computation power to assess a position and find the best move. At its core, stockfish uses a minimax algorithm to calculate under the assumption that the opponent will also play the most optimal move they can choose. Since chess is such a complicated game with many different positions(69 trillion by move 10), it is necessary to develop a heuristic function to abstract the evaluation of who is winning. This heuristic function will take into account the material value and a variety of positional factors, king safety, piece activity, pawn structure, and control over key squares.

## Neural Network Chess Engines
Neural network-based chess engines leverage deep learning to evaluate chess positions, eschewing the brute force calculation and handcrafted evaluation functions of traditional engines like Stockfish. These engines use deep neural networks (DNNs) trained on large datasets of games, learning the intricacies of chess through self-play. Unlike traditional engines that rely on material and positional heuristics, neural networks assimilate a broad range of strategic concepts such as piece mobility, king safety, and pawn structure, effectively developing their own nuanced criteria for evaluation.

Instead of the minimax algorithm with alpha-beta pruning, these neural networks often employ Monte Carlo Tree Search (MCTS). MCTS works by simulating numerous random games from the current position and using these outcomes, informed by the neural network’s evaluation, to choose moves. The neural network aids MCTS by prioritizing more promising lines of play, enabling a more focused search that balances exploration and exploitation.

This approach allows neural network engines to recognize and generalize from patterns in past games, blending learned strategies with a form of artificial intuition. As a result, they can play effectively in positions that extend beyond the scope of pre-programmed rules, demonstrating a more human-like understanding of the game. This innovation marks a significant departure from traditional engines, propelling computer chess into an era that prioritizes learned knowledge and pattern recognition over sheer computational force.

## Humans
All humans are not the same, but I will generalize based on my experience both watching and playing chess. If it sounds like I am explaining the way Neural Networks work, then that is good, since the human brain is essentially a very complicated Neural Network.

The first step that a human will take is to look at the current position and assess it, is it an open or closed position, are there lots of tactics, or should I play positionally, where are the checks, captures, and attacks, along with their intuition, when asked about why they felt as though a position was better, Grandmasters Magnus Carlsen and Hikaru Nakamura often mention their intuition, perhaps deep in their brains they have seen a similar position before, but there is an undefinable “feeling” that guides chess players, especially the best. Then they will generate a few candidate moves to look at depending on how obvious or “forced” the next few moves are a human will spend more or less time on the move. In a scenario where there are multiple pieces targeting each other, with many candidate moves for each side in the following lines, a human may spend more time, but in the case of a clearly winning end game a human doesn’t have to calculate as much.

Similar to the Neural Network, a human will continue calculating lines that look more promising, and will prioritize those that don’t look as much, less. The main difference between Neural Networks is that humans are much more prone to make mistakes, inaccuracies, and blunders, since we are not trained on millions of data points with the sole purpose of playing chess.

## Goals
The Goal of this project is to create a bot that recreates human play, Maia chess is able to predict the played move about 52%, I am doubtful whether my bot will be able to compete, however, I have found that even Maia chess doesn’t feel human, although it does better at emulating it, even if the percentage of human moves is higher, I hope to make a bot that feels human.

