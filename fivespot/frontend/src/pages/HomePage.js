import React, { Component } from 'react';
import Header from '../components/header/Header';
import Cards from '../components/card/Cards';

export class HomePage extends Component {

    render() {
        return (
        <div>
            <section className="hero is-info is-large is-bold">
                <div className="hero-head">
                <Header />


                </div>
               

                <div className="hero-body">
                    <div className="container has-text-centered"> 
                        <h1 className="title">
                            FIVESPOT
                        </h1>
                        <h2 className="subtitle">
                            Bite sized virtual tours
                        </h2>


                    </div>

                </div>

            </section>


     
            <section className="container mt-4">


                <Cards />

            </section>
            

        </div>
        );
    }
}

export default HomePage
