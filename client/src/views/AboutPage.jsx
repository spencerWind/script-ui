import PageView from "../components/Containers/PageView";
import Section from "../components/Containers/Section";

const AboutPage = () => {
    return (
        <PageView>
            <Section>
                <p className="mb-2 text-2xl font-semibold text-slate-400">
                    &quot;With Script-UI, my goal was to create a library that
                    would enable developers to get sites up and running as
                    quickly as possible&quot;
                </p>
                <p className="text-sm font-bold tracking-wide text-slate-100">
                    - Spencer Wind, founder
                </p>
            </Section>
            <Section>
                <h1 className="mb-8 text-center text-xl font-bold text-primary">
                    About Script-UI
                </h1>
                <div className="flex flex-col gap-4 font-light text-slate-300 max-lg:text-sm lg:flex-row lg:gap-16">
                    <div className="lg:w-1/3">
                        <h3 className=" font-semibold text-slate-100">
                            Origins
                        </h3>
                        <p className="mb-2 lg:mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eos laborum ab nam odio iure velit provident,
                            tenetur ipsam placeat aliquam. Nostrum vitae, libero
                            fuga modi expedita quod explicabo eos id.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eos laborum ab nam odio iure velit provident,
                            tenetur ipsam placeat aliquam. Nostrum vitae, libero
                            fuga modi expedita quod explicabo eos id.
                        </p>
                    </div>
                    <div className="lg:w-1/3">
                        <h3 className=" font-semibold text-slate-100">
                            Development
                        </h3>
                        <p className="mb-2 lg:mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eos laborum ab nam odio iure velit provident,
                            tenetur ipsam placeat aliquam. Nostrum vitae, libero
                            fuga modi expedita quod explicabo eos id.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eos laborum ab nam odio iure velit provident,
                            tenetur ipsam placeat aliquam. Nostrum vitae, libero
                            fuga modi expedita quod explicabo eos id.
                        </p>
                    </div>
                    <div className="lg:w-1/3">
                        <h3 className=" font-semibold text-slate-100">
                            Looking Ahead
                        </h3>
                        <p className="mb-2 lg:mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eos laborum ab nam odio iure velit provident,
                            tenetur ipsam placeat aliquam. Nostrum vitae, libero
                            fuga modi expedita quod explicabo eos id.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eos laborum ab nam odio iure velit provident,
                            tenetur ipsam placeat aliquam. Nostrum vitae, libero
                            fuga modi expedita quod explicabo eos id.
                        </p>
                    </div>
                </div>
            </Section>
            <Section className="relative">
                <h1 className="text-xl font-bold text-primary">
                    Effortless Design
                </h1>
                <div className="flex flex-row">
                    <p className="w-1/4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas, molestias aspernatur? Aspernatur quas reiciendis
                        nemo similique repellendus voluptatum officia iusto!
                    </p>
                    <div className="border w-3/4">

                    </div>
                </div>
            </Section>
        </PageView>
    );
};

export default AboutPage;
