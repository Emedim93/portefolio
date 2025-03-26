/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="flex-[2]">
                <h2>Elias Araneda</h2>
                <h3>Software developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas quod illum laborum natus suscipit consequatur neque facilis labore. Error est ut aut sint amet quaerat ipsum repellat tenetur architecto.
                </p>
            </div>
            <div className="flex-1">
                <img
                src="https://media.licdn.com/dms/image/v2/D4E35AQFAaJdqA8Jtpw/profile-framedphoto-shrink_200_200/B4EZXTrYDSHUAg-/0/1743013118585?e=1743620400&v=beta&t=T38-8Z_Vpz9y_YaF7SZl81v5uW8XjkC6QAu6u8xhAKU "
                className="w-full h-auto max-w-xs"
                style={{ borderRadius: '50%' }}
                alt="elias's picture"
                />
            </div>
        </Section>
    )
}