import ImageSlider from '../components/ImageSlider';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className=" prose">
      <div className="bg-[rgb(250,240,230)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="absolute animate-pulse-circle"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: 'rgba(139, 69, 19, 0.3)',
                animationDelay: `${index * 0.5}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>
        <header className="bg-[rgb(56,34,15)] shadow-2xl relative z-10">
          <a className="banner mx-auto ml-2 z-50" href="https://hackclub.com/">
            <img
              src="https://contribute.hackclub.com/images/flag-orpheus-top.png"
              alt="Hack Club Logo"
            ></img>
          </a>
          <div className="flex w-full h-20 items-center">
            <div className="w-[15%] text-center"></div>
            <div className="w-[70%] text-center font-[blox] text-5xl text-[rgb(250,240,230)]">
              <a href="#">HCARC</a>
            </div>
            <div className="w-[15%] text-center md:visible invisible font-bold text-[rgb(250,240,230)] underline decoration-dotted text-xl hover:text-white">
              <a href="https://hackclub.com/slack/?event=Hack%20Club%20Amateur%20Radio%20Club">Get started</a>
            </div>
          </div>
        </header>
        <ImageSlider />
        <main className="mx-auto text-left w-[50%] pt-10 text-[rgb(56,34,15)] mb-20 relative z-10">
          <div className="border-[5px] rounded-2xl border-dotted border-[rgb(56,34,15)] p-10 bg-white relative z-10">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Hack Club Amateur Radio Club!</h1>
            <p className="text-lg">Join us monthly in the <code>#hamradio</code> channel of the Hack Club Slack. Experience ham radio at Hack Club events, like Outernet.</p>
            <br></br>
            <p className="text-lg">Stay tuned for exciting updates and activities!</p>
            <br></br>
            <a href="https://hackclub.com/slack/?event=Hack%20Club%20Amateur%20Radio%20Club" className="text-lg font-bold hover:underline inline-block">Get started.</a>
          </div>
        </main>
      </div>
      <Footer />
    </div >
  );
};
