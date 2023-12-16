import Expand from '../../components/Expand';
import { CardsLink } from '../../components/CardsLink';

const Faq = () => {
  return (
    <>
      <h1 className='text-lg text-dark-text-1 font-semibold text-center mt-6 xl:text-2xl xl:mt-8'>
        Frequently Asked Questions
      </h1>
      <section className='flex flex-col justify-between h-full max-w-[1000px]'>
        <Expand>
          <ul className='flex flex-col gap-2 mt-6'>
            <Expand.Wrapper>
              <Expand.Opener title='Is Compass© free?' opens='faq-free' />
              <Expand.Body id='faq-free'>
                <p className='text-dark-text-2 px-2 lg:text-lg'>
                  You can create an account and use all features of Compass© for
                  free. You are able to buy extra likes if needed.
                </p>
              </Expand.Body>
            </Expand.Wrapper>
            <Expand.Wrapper>
              <Expand.Opener title='How does Compass© work?' opens='faq-how' />
              <Expand.Body id='faq-how'>
                <p className='text-dark-text-2 px-2 lg:text-lg'>
                  After creating your profile either as a employer or employee,
                  you can swipe other users right(interested) or left(not
                  interested). If both are interested you match and can start
                  chatting.
                </p>
              </Expand.Body>
            </Expand.Wrapper>
            <Expand.Wrapper>
              <Expand.Opener title='What are extra likes?' opens='faq-extra' />
              <Expand.Body id='faq-extra'>
                <p className='text-dark-text-2 px-2 lg:text-lg'>
                  Compass© provides a free amount of likes everyday. But if you
                  have the need to keep swiping users, you can buy additional
                  likes to keep searching.
                </p>
              </Expand.Body>
            </Expand.Wrapper>
            <Expand.Wrapper>
              <Expand.Opener
                title='Where can I use Compass©?'
                opens='faq-job'
              />
              <Expand.Body id='faq-job'>
                <p className='text-dark-text-2 px-2 lg:text-lg'>
                  You can use Compass© anywhere, at anytime just with a browser
                  and a internet connection. The mobile app will be realease in
                  the future.
                </p>
              </Expand.Body>
            </Expand.Wrapper>
            <Expand.Wrapper>
              <Expand.Opener
                title='What should I put in my profile?'
                opens='faq-profile'
              />
              <Expand.Body id='faq-profile'>
                <p className='text-dark-text-2 px-2 lg:text-lg'>
                  No matter if you are looking for a job or hiring, you need to
                  tell the other user about you and your needs. In addition you
                  can upload an image.
                </p>
              </Expand.Body>
            </Expand.Wrapper>
          </ul>
        </Expand>
        <div className='mb-3'>
          <h3 className='text-lg text-dark-text-1 font-semibold text-center mb-3 xl:text-xl'>
            Are you ready?
          </h3>
          <div className='flex justify-center'>
            <CardsLink link='/'>Get Started</CardsLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
