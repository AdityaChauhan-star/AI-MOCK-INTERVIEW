import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaUser, FaRocket, FaChartLine } from 'react-icons/fa';

// Assuming these components exist; adjust imports as needed
import { Button } from '@/components/ui/button'; // Verify this path exists
import Contact from '@/_components/Contact'; // Verify this component exists

const Page = () => {
  return (
    <div className="font-sans bg-background antialiased">
      <Head>
        <title>AI Mock Interview | Master Your Next Interview</title>
        <meta name="description" content="Prepare for your next interview with AI-powered mock interviews and personalized feedback." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Header Section */}
        <header className="w-full py-4 bg-card shadow-sm sticky top-0 z-50 border-b border-border">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <Link href="/" className="flex items-center gap-2" aria-label="AI Mock Interview Home">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">AI</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground tracking-tight">AI Mock Interview</h1>
            </Link>
            <nav className="flex flex-col sm:flex-row items-center mt-4 md:mt-0 space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#features" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300">Features</a>
                <a href="#pricing" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300">Pricing</a>
                <a href="#testimonials" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300">Testimonials</a>
                <a href="#contact" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/18vikastg"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <Link href="/signin" className="text-base font-medium text-primary hover:text-[hsl(var(--primary)/0.8)] transition-colors duration-300" aria-label="Sign In">
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-40 bg-gradient-to-r from-primary to-[hsl(var(--primary)/0.8)] px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-repeat bg-[length:20px_20px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjEzIiByPSIzIi8+PC9nPjwvc3ZnPg==')] z-0"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight tracking-tight animate-fade-in-up">
              Master Your Next Interview with AI Precision
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--primary-foreground)/0.9)] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Elevate your interview skills with AI-driven mock interviews and expert-level feedback tailored to your career goals.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link
                href="/dashboard"
                className="inline-block px-8 py-4 text-base font-semibold bg-card text-primary rounded-md shadow-lg hover:bg-muted hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:ring-ring"
                aria-label="Start Practicing Now"
              >
                Start Practicing Now
              </Link>
              <Link
                href="#features"
                className="inline-block px-8 py-4 text-base font-semibold border-2 border-primary-foreground text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:ring-ring"
                aria-label="Explore Features"
              >
                Explore Features
              </Link>
            </div>
            <p className="text-sm text-[hsl(var(--primary-foreground)/0.7)] mt-6">Trusted by 10K+ professionals • No credit card required</p>
            <div className="mt-10">
              <div className="bg-card rounded-lg shadow-lg p-4 max-w-3xl mx-auto">
                <p className="text-muted-foreground text-sm">Watch a quick demo</p>
                {/* Replace with actual video embed in production */}
                <div className="bg-muted h-48 rounded-md flex items-center justify-center">
                  <Link
                    href="#features"
                    className="text-primary hover:text-[hsl(var(--primary)/0.8)] transition-colors duration-300"
                    aria-label="Watch Demo"
                  >
                    Watch Demo →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background border-b border-border">
          <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <FaUser className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-4xl font-bold text-foreground animate-[count-up_2s_ease-out_forwards]">10K+</h3>
              <p className="text-muted-foreground font-light">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRocket className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-4xl font-bold text-foreground animate-[count-up_2s_ease-out_forwards]">50K+</h3>
              <p className="text-muted-foreground font-light">Interviews Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <FaChartLine className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-4xl font-bold text-foreground animate-[count-up_2s_ease-out_forwards]">95%</h3>
              <p className="text-muted-foreground font-light">Success Rate</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-[hsl(var(--muted)/0.1)] px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight animate-fade-in-up">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 font-light">
              Discover the tools that set you apart in your interview preparation journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'AI-Powered Mock Interviews',
                  description: 'Experience realistic scenarios tailored to your industry and role with cutting-edge AI.',
                  icon: '💡',
                },
                {
                  title: 'Instant Expert Feedback',
                  description: 'Receive detailed, actionable insights on your performance instantly.',
                  icon: '🚀',
                },
                {
                  title: 'Comprehensive Analytics',
                  description: 'Get in-depth reports and personalized recommendations to improve.',
                  icon: '📊',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-card to-[hsl(var(--card)/0.95)] rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border"
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light mb-6">{feature.description}</p>
                  <a href="#features" className="text-sm text-primary hover:text-[hsl(var(--primary)/0.8)] transition-colors duration-300">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 bg-background px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight animate-fade-in-up">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 font-light">
              See how professionals like you have transformed their careers with us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Software Engineer',
                  testimonial: 'The AI-driven practice sessions were a game-changer. I landed my dream job at a top tech firm!',
                  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                },
                {
                  name: 'Sarah Williams',
                  role: 'Product Manager',
                  testimonial: 'The feedback was spot-on and helped me ace my interviews. I’m now leading a product team!',
                  avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-[hsl(var(--primary)/0.2)]"
                    />
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-left leading-relaxed italic font-light">"{testimonial.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-[hsl(var(--primary)/0.05)] px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight animate-fade-in-up">Ready to Excel?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              Join thousands of professionals who have transformed their interview skills with AI Mock Interview.
            </p>
            <Link
              href="/dashboard"
              className="inline-block px-10 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-md shadow-lg hover:bg-[hsl(var(--primary)/0.9)] transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:ring-ring"
              aria-label="Get Started Today"
            >
              Get Started Today
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-[hsl(var(--muted)/0.1)] px-6">
          <Contact />
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 text-base font-semibold bg-primary text-primary-foreground rounded-md shadow-lg hover:bg-[hsl(var(--primary)/0.9)] transition-all duration-300 focus:ring-2 focus:ring-ring"
            aria-label="Start Now"
          >
            Start Now
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">AI Mock Interview</h3>
            <p className="text-muted-foreground font-light">Empowering your career with AI-driven preparation.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/18vikastg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="GitHub">
                <FaGithub className="w-6 h-6" />
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Stay Updated</h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Email for newsletter"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-[hsl(var(--primary)/0.9)] transition-all duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 text-center">
          <p className="text-muted-foreground text-sm font-light">
            © {new Date().getFullYear()} AI Mock Interview. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;