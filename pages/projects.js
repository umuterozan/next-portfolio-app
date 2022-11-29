import Layout from "../components/Layout";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Projects() {
    return (
        <Layout title="Portfolio | Projects">
            <Header />

            <Main>
                <section className="font-consolata mt-16">
                    <h1 className="font-bold text-3xl text-primary-yellow text-center">
                        My Works
                    </h1>
                    <div className="mt-14 flex items-center justify-between gap-5">
                        <div className="bg-card-portfolio bg-cover bg-no-repeat bg-center">
                            <div className="bg-primary-gray h-full w-full opacity-95 p-[82px] text-center">
                                <h1 className="font-bold text-3xl text-primary-yellow">
                                    News Blog
                                </h1>
                                <h2 className="font-medium text-base text-primary-white mt-3">
                                    HTML, SCSS, JS
                                </h2>
                                <hr className="bg-primary-orange h-[1px] border-none mt-3" />
                                <p className="font-normal text-primary-white text-left mt-5 leading-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className="bg-primary-button rounded text-primary-white font-medium text-sm py-3 px-6 mt-5">See more →</button>
                            </div>
                        </div>

                        <div className="bg-card-portfolio bg-cover bg-no-repeat bg-center cursor-default">
                            <div className="bg-primary-gray h-full w-full opacity-0 p-[82px] text-center">
                                <h1 className="font-bold text-3xl text-primary-yellow">
                                    News Blog
                                </h1>
                                <h2 className="font-medium text-base text-primary-white mt-3">
                                    HTML, SCSS, JS
                                </h2>
                                <hr className="bg-primary-orange h-[1px] border-none mt-3" />
                                <p className="font-normal text-primary-white text-left mt-5 leading-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className="bg-primary-button rounded text-primary-white font-medium text-sm py-3 px-6 mt-5">See more →</button>
                            </div>
                        </div>

                        <div className="bg-card-portfolio bg-cover bg-no-repeat bg-center">
                            <div className="bg-primary-gray h-full w-full opacity-95 p-[82px] text-center">
                                <h1 className="font-bold text-3xl text-primary-yellow">
                                    News Blog
                                </h1>
                                <h2 className="font-medium text-base text-primary-white mt-3">
                                    HTML, SCSS, JS
                                </h2>
                                <hr className="bg-primary-orange h-[1px] border-none mt-3" />
                                <p className="font-normal text-primary-white text-left mt-5 leading-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className="bg-primary-button rounded text-primary-white font-medium text-sm py-3 px-6 mt-5">See more →</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Main>

            <Footer />
        </Layout>
    );
}
