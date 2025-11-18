import { useState } from 'react';

const BusinessSelection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#060b15] text-white flex flex-col items-center justify-center p-4 md:p-8 font-sans relative overflow-hidden">
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 mb-6 md:mb-12 text-center max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-wide mb-2 md:mb-4 text-white">
          Choose Your Path
        </h1>
        <p className="text-[#8A95A5] text-sm md:text-lg">
          Select the business model that aligns with your resources.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[1000px]">
        
        <div 
          className={`
            relative group cursor-pointer rounded-xl border transition-all duration-300 ease-out
            flex flex-col p-5 md:p-8 h-auto md:min-h-[420px]
            ${hoveredCard === 'cashflow' 
              ? 'bg-[linear-gradient(145deg,#0d1a25,#081018)] border-[#F2C965] shadow-[0_0_40px_-10px_rgba(242,201,101,0.3)] transform -translate-y-1' 
              : 'bg-[#0d1a25] border-[#2A3441] hover:border-[#F2C965]/40'}
          `}
          onMouseEnter={() => setHoveredCard('cashflow')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex flex-row items-center gap-4 mb-4 md:mb-6">
            <div className={`
              w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border transition-all duration-300
              ${hoveredCard === 'cashflow' 
                ? 'bg-gradient-to-b from-[#FFEDB3] via-[#F2C965] to-[#D8B055] border-transparent shadow-lg scale-110' 
                : 'bg-transparent border-[#2A3441] group-hover:border-[#F2C965]/40'}
            `}>
              <svg 
                viewBox="-4 -4 56 56" 
                fill="none" 
                className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${hoveredCard === 'cashflow' ? 'text-[#060b15] [&_path]:fill-[#060b15]' : '[&_path]:fill-white'}`}
              >
                <path d="M10.9182 40.9493L10.1554 35.5554C10.0468 34.7877 9.33601 34.2518 8.56951 34.362C7.80217 34.4706 7.26821 35.1811 7.37682 35.9489L7.54763 37.1568C6.09086 35.3578 4.93091 33.318 4.12736 31.1194C-1.5607 15.558 12.1761 -0.136269 28.192 3.28229C28.9497 3.44367 29.6952 2.96049 29.8571 2.20212C30.0188 1.44375 29.5355 0.697826 28.7776 0.535987C10.6924 -3.32494 -4.99416 14.3401 1.49184 32.0841C2.40053 34.5703 3.71165 36.8783 5.35878 38.9148L4.00295 38.6542C3.24168 38.5081 2.50642 39.0066 2.36021 39.768C2.214 40.5296 2.71241 41.2655 3.47339 41.4118L9.14443 42.5019C10.1658 42.7903 11.0537 41.9054 10.9182 40.9493Z" />
                <path d="M46.2818 15.6748C45.3731 13.1886 44.062 10.8805 42.4148 8.84408L43.7708 9.10467C44.5314 9.25069 45.2673 8.75226 45.4135 7.9908C45.5597 7.22925 45.0613 6.49334 44.3003 6.34704L38.6282 5.25666C37.6198 4.97267 36.718 5.8384 36.8555 6.80934L37.6184 12.2033C37.7175 12.9044 38.318 13.4108 39.0059 13.4108C39.8636 13.4108 40.5161 12.6523 40.3969 11.8098L40.2261 10.6019C41.6829 12.4008 42.8428 14.4407 43.6464 16.6391C47.63 27.5376 42.0271 39.6528 31.1568 43.6459C27.4379 45.012 23.4353 45.299 19.5818 44.4764C18.8241 44.3146 18.0784 44.7982 17.9167 45.5565C17.7549 46.3149 18.2383 47.0608 18.9962 47.2227C23.3682 48.1561 27.9076 47.8307 32.1238 46.282C44.4751 50.8072 28.0553 46.2818 15.6748Z" />
                <path d="M38.4323 23.9531C38.4323 15.9142 31.9072 9.37406 23.8868 9.37406C15.8664 9.37406 9.34125 15.9142 9.34125 23.9531C9.34125 31.992 15.8664 38.5321 23.8868 38.5321C31.9072 38.5321 38.4323 31.992 38.4323 23.9531ZM12.1476 23.9531C12.1476 17.4626 17.4138 12.1821 23.8868 12.1821C30.3598 12.1821 35.6259 17.4626 35.6259 23.9531C35.6259 30.4436 30.3598 35.724 23.8868 35.724C17.4138 35.724 12.1476 30.4436 12.1476 23.9531Z" />
                <path d="M25.2899 31.8395V30.6675C27.7214 30.6675 29.4133 28.758 29.4133 26.6083C29.4133 24.37 27.5956 22.549 25.3615 22.549H22.4121C21.7253 22.549 21.1667 21.9878 21.1667 21.2979C21.1667 20.632 21.6904 20.0468 22.4317 20.0468H25.2555C25.751 20.0517 26.2414 20.2751 26.6014 20.6603C27.1307 21.2266 28.0186 21.2562 28.5847 20.7265C29.1506 20.1968 29.1802 19.3083 28.6508 18.742C27.7707 17.8006 26.5466 17.2538 25.2899 17.2393V16.0668C25.2899 15.2914 24.6617 14.6627 23.8868 14.6627C23.1118 14.6627 22.4836 15.2914 22.4836 16.0668V17.2388C20.0521 17.2388 18.3603 19.1483 18.3603 21.2979C18.3603 23.5363 20.1779 25.3572 22.412 25.3572H25.3614C26.0482 25.3572 26.6069 25.9185 26.6069 26.6084C26.6069 27.303 26.0466 27.8596 25.3616 27.8596C25.355 27.8596 25.3483 27.8595 25.3418 27.8595H22.2606C21.911 27.8559 21.5392 27.7291 21.2131 27.5024C20.5766 27.0599 19.7022 27.2174 19.2601 27.8541C18.8178 28.4909 18.9751 29.3657 19.6115 29.8083C20.5722 30.4765 21.4664 30.6677 22.4835 30.6677V31.8397C22.4835 32.6151 23.1118 33.2437 23.8867 33.2437C24.6617 33.2435 25.2899 32.6149 25.2899 31.8395Z" />
              </svg>
            </div>

            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
              Cashflow
            </h2>
          </div>

          <div className="flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
               <div className={`h-px flex-grow transition-colors duration-300 ${hoveredCard === 'cashflow' ? 'bg-[#F2C965]' : 'bg-[#2A3441]'}`} />
               <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${hoveredCard === 'cashflow' ? 'text-[#F2C965]' : 'text-[#8A95A5]'}`}>
                 Time &gt; Money
               </span>
               <div className={`h-px flex-grow transition-colors duration-300 ${hoveredCard === 'cashflow' ? 'bg-[#F2C965]' : 'bg-[#2A3441]'}`} />
            </div>

            <p className="text-sm md:text-base text-[#8A95A5] leading-snug md:leading-relaxed mb-4 md:mb-8 group-hover:text-[#B0B8C4] transition-colors">
              You have more time than money. Master a high-income skill to generate monthly recurring revenue from zero.
            </p>

            <div className="space-y-1 md:space-y-2 mt-auto mb-4 md:mb-8">
              {['Start with $0', 'Speed to Cash', 'High-Income Skills'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-[#8A95A5]">
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${hoveredCard === 'cashflow' ? 'bg-[#F2C965]' : 'bg-[#2A3441]'}`} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={`
            w-full py-3 md:py-4 rounded flex items-center justify-center font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300
            ${hoveredCard === 'cashflow' 
              ? 'bg-gradient-to-b from-[#FFF4D6] via-[#F2C965] to-[#C69F3E] text-[#060b15] shadow-[0_0_20px_-5px_rgba(242,201,101,0.6)]' 
              : 'bg-[#1E2732] text-white group-hover:bg-[#252D38]'}
          `}>
            Select Cashflow
            <svg 
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${hoveredCard === 'cashflow' ? 'translate-x-1' : ''}`} 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        <div 
          className={`
            relative group cursor-pointer rounded-xl border transition-all duration-300 ease-out
            flex flex-col p-5 md:p-8 h-auto md:min-h-[420px]
            ${hoveredCard === 'investing' 
              ? 'bg-[linear-gradient(145deg,#0d1a25,#081018)] border-[#F2C965] shadow-[0_0_40px_-10px_rgba(242,201,101,0.3)] transform -translate-y-1' 
              : 'bg-[#0d1a25] border-[#2A3441] hover:border-[#F2C965]/40'}
          `}
          onMouseEnter={() => setHoveredCard('investing')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex flex-row items-center gap-4 mb-4 md:mb-6">
            <div className={`
              w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border transition-all duration-300
              ${hoveredCard === 'investing' 
                ? 'bg-gradient-to-b from-[#FFEDB3] via-[#F2C965] to-[#D8B055] border-transparent shadow-lg scale-110' 
                : 'bg-transparent border-[#2A3441] group-hover:border-[#F2C965]/40'}
            `}>
              <svg 
                viewBox="0 0 43 29" 
                fill="none" 
                className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${hoveredCard === 'investing' ? 'text-[#060b15] [&_path]:fill-[#060b15]' : '[&_path]:fill-white'}`}
              >
                <path d="M41.6504 0H27.9534C27.2084 0 26.6037 0.601236 26.6037 1.34379V4.05813C26.6037 4.79985 27.2084 5.40192 27.9534 5.40192H33.739L21.9006 17.1883L16.8817 12.1911C15.8218 11.1367 14.1043 11.1367 13.0445 12.1911L0.395566 24.787C-0.131855 25.3113 -0.131855 26.1625 0.395566 26.6868L2.32301 28.6068C2.84959 29.1311 3.70455 29.1311 4.23113 28.6068L14.9635 17.9208L19.9816 22.918C21.0414 23.9736 22.7591 23.974 23.8188 22.918L37.5746 9.22173V14.9824C37.5746 15.7241 38.1785 16.3262 38.9242 16.3262H41.6504C42.3962 16.3262 43 15.7241 43 14.9824V1.34379C43 0.601236 42.3962 0 41.6504 0Z" />
              </svg>
            </div>

            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
              Investing
            </h2>
          </div>

          <div className="flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
               <div className={`h-px flex-grow transition-colors duration-300 ${hoveredCard === 'investing' ? 'bg-[#F2C965]' : 'bg-[#2A3441]'}`} />
               <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${hoveredCard === 'investing' ? 'text-[#F2C965]' : 'text-[#8A95A5]'}`}>
                 Money &gt; Time
               </span>
               <div className={`h-px flex-grow transition-colors duration-300 ${hoveredCard === 'investing' ? 'bg-[#F2C965]' : 'bg-[#2A3441]'}`} />
            </div>

            <p className="text-sm md:text-base text-[#8A95A5] leading-snug md:leading-relaxed mb-4 md:mb-8 group-hover:text-[#B0B8C4] transition-colors">
              You have capital to deploy. Focus on strategies to multiply your existing net worth through markets.
            </p>

            <div className="space-y-1 md:space-y-2 mt-auto mb-4 md:mb-8">
              {['Requires Capital', 'Long-term Wealth', 'Asset Management'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-[#8A95A5]">
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${hoveredCard === 'investing' ? 'bg-[#F2C965]' : 'bg-[#2A3441]'}`} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={`
            w-full py-3 md:py-4 rounded flex items-center justify-center font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300
            ${hoveredCard === 'investing' 
              ? 'bg-gradient-to-b from-[#FFF4D6] via-[#F2C965] to-[#C69F3E] text-[#060b15] shadow-[0_0_20px_-5px_rgba(242,201,101,0.6)]' 
              : 'bg-[#1E2732] text-white group-hover:bg-[#252D38]'}
          `}>
            Select Investing
            <svg 
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${hoveredCard === 'investing' ? 'translate-x-1' : ''}`} 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessSelection;
