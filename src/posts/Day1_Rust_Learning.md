---
author: B4night
title: "Day1: Rust Learning"
tags: []
categories:
  - rust
  - Day1! Rust Learning.md
date: 2024-03-26
---

# Install

Watch this tutorial: <https://doc.rust-lang.org/book/ch01-01-installation.html>

# Hello World

```rust
fn main() {
    println!("Hello World");
}
```

Then use command `rustc ./main.rs` to generate the executable `main`

The `main` function is the entry of the program.

# The `!` in `println!`

tldr: Using a `!` means calling a macro instead of a normal function

# Cargo

Cargo is Rust’s build system and package manager.

## Create a project with Cargo

Command `Cargo new project_name` will create a project directory.

## Build and Run a Cargo Program

Using command `cargo build` and that will compile and generate executable files.

The executable files will be stored in `./target/debug/`, we can simply use `./target/debug/hello_world` to execute these files.

Or we can simply use `cargo run`, which will compile and run the program automatically.

## tl;dr

*   We can create a project using `cargo new`.
*   We can build a project using `cargo build`.
*   We can build and run a project in one step using `cargo run`.
*   We can build a project without producing a binary to check for errors using `cargo check`.
*   Instead of saving the result of the build in the same directory as our code, Cargo stores it in the *target/debug* directory.

# Import library

`use std::io;`

# Variables

```rust
let mut guess = String::new();	// mutable
let apples = 5;					// immutable
```

The `mut` indicates that the value of the variable is mutable.

# Receive User Input

```rust
io::stdin()
    .read_line(&mut guess)
    .expect("Fail to read lines");	// This is called when error comes out
```

# Print variables in `println!`

```rust
let x = 5;
let y = 10;

println!("x = {x} and y + 2 = {}", y + 2);
```

# Crate

This refers to library or module in other languages.

## Import crates

Edit the `Cargo.toml` file and add `dependencies`

```toml
[package]
name = "guess_game"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
rand = "0.8.5"	 # This is a crate
```

## update crates

Use command `cargo update` to upgrade crates

# Generate a Random Number

```rust
use std::io;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);
    // 1..=100 is a range that starts at 1 and ends at 100 (inclusive).

    println!("The secret number is: {secret_number}");

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}");
}
```

# Compare

```rust
use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    
    // ...snip...
    
    let guess: u32 = guess.trim().parse().expect("Please type a number!");
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
```

This place uses `match` expression to decide what to do next based on which variant of `Ordering` was returned from `cmp`.

The statement `let guess: u32 ` indicates that the type of variable `guess` should be `u32`.

# Use loop while guessing numbers

```rust
loop {
    	// snip
    	
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            },
        }
    }
```

# Handle Invalid Input

We may encounter invalid input error when converting string to int.

```rust
let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
    Err(_) => continue,
};
```

Instead of using `expert`, we use `match` expression here to deal with invalid inputs.
