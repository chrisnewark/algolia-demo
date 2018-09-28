import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
  <div id="group-navigation">
    <div class="wrapper">
        <ul>
    <li>
        <a href="http://www.asos.com?WT.ac=Mktp_grpnav"><span>Asos</span></a>
    </li>
    <li class="marketplace">
        <a href="/" id="MarketplaceLink"><span>Marketplace</span></a>
    </li>
</ul>
        <a href="/help/manifesto" class="what">What is <strong>Marketplace?</strong></a>
    </div>
    <div class="wrapper">
        <div id="group-navigation-notification">
            <div id="NotificationTooltip">
                <span class="tooltip-arrow"></span>
                You can now easily jump<br/>between all of our sites<br/><em>Try it out!</em>
            </div>
            <input id="isNotificationEnabled" name="ShowTooltips" type="hidden" value="0" />
        </div>
    </div>
</div> 

<p id="skiplinks"><a href="#content">Skip to content</a></p>
<div id="container" class="">
    
        
        <div id="masthead" class="cf">
            <p id="logo"><a title="Back to the Home Page" href="/?dp=1&amp;WT.ac=Mktp_Title_Home">ASOS Marketplace</a></p>
            

            <div id="search-container" role="search">
            <form action="/search" class="cf" id="search" method="get">
                <fieldset>
                    <legend class="hidden">Search ASOS Marketplace</legend>
                    <div class="searchForm">
                        <input autocomplete="off" class="hint" id="q" name="q" type="text" value="Search ASOS Marketplace" />
                        <input id="oss_ss" name="oss_ss" type="hidden" value="" />
                        <input id="mpwa_searchIsSuggested" name="mpwa_searchIsSuggested" type="hidden" value="" />
                        <input id="btnSearch" type="submit" value="Go" />
                    </div>
                </fieldset>
            </form>
            </div>
                        <div id="account-pref">
                            

            <div id="currency">    
                
              <a id="currencyPicker" class="gbp" data-ga-category="Currency picker" data-ga-action="Show" 
                    data-ga-label="Current currency - UK Pounds - GBP"><span class="currency">UK Pounds - GBP</span><span class="arrow"></span></a> 
                <div id="currencyList">
                <h3>Choose Currency:</h3>
              <ul>
                
                <li><a class="aud currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - Australian Dollar - AUD" 
                        href="/international/setcurrency?name=AUD">Australian Dollar - AUD</a></li>
                  
                <li><a class="cad currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - Canadian Dollar - CAD" 
                        href="/international/setcurrency?name=CAD">Canadian Dollar - CAD</a></li>
                  
                <li><a class="rmb currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - Chinese Yuan - RMB" 
                        href="/international/setcurrency?name=RMB">Chinese Yuan - RMB</a></li>
                  
                <li><a class="dkk currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - Danish Kroner - DKK" 
                        href="/international/setcurrency?name=DKK">Danish Kroner - DKK</a></li>
                  
                <li><a class="eur currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - Euro - EUR" 
                        href="/international/setcurrency?name=EUR">Euro - EUR</a></li>
                  
                <li><a class="nok currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - Norwegian Kroner - NOK" 
                        href="/international/setcurrency?name=NOK">Norwegian Kroner - NOK</a></li>
                  
                <li><a class="rub currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - Russian Rouble - RUB" 
                        href="/international/setcurrency?name=RUB">Russian Rouble - RUB</a></li>
                  
                <li><a class="sek currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - Swedish Kronor - SEK" 
                        href="/international/setcurrency?name=SEK">Swedish Kronor - SEK</a></li>
                  
                <li><a class="gbp currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - UK Pounds - GBP" 
                        href="/international/setcurrency?name=GBP">UK Pounds - GBP</a></li>
                  
                <li><a class="usd currency-select" data-ga-category="Currency picker" data-ga-action="Change" 
                        data-ga-label="New currency - US Dollars - USD" 
                        href="/international/setcurrency?name=USD">US Dollars - USD</a></li>
                    
              </ul>
                <h3 id="language-heading">Change Language:</h3>
                <div id="google_translate_element"></div>
                </div>
            </div>

            <fieldset id="controls" class="cf">
                <legend>User controls</legend>
                <ul class="nav">
                    
                        <li class="adminPanel"></li>
                    
                    <li class="myAccount">
                        

            <span id="welcome-message">
                
                    Hi <strong class="notranslate"><a href="/my/activity/actionrequired">Ed</a></strong>,
                    
            </span>

            <a href="/authentication/logon" class="logon first authenticate" data-ga-category="Account" data-ga-action="Login" data-ga-label="" data-mpwa-event="login">
              not you?
            </a>


                    </li>
                    <li>
                        <ul class="myWantList">
                            
                                <li class="first">
                                    <a href="/help?WT.ac=Mktp_Head_Help">Help</a>
                                    <ul class="sub-nav">
                                        <span class="marker"></span>                  
                                        <li>
                                            <a href="/help/faq-boutiques">Boutique Help <span>&rsaquo;</span></a>
                                        </li>
                                        <li>
                                            <a href="/help/faq">Shopping Help<span>&rsaquo;</span></a>
                                        </li>
                                        <li>
                                            <a href="/help/faq-account">Account Help <span>&rsaquo;</span></a>
                                        </li>
                                        <li>
                                            <a href="/my/boutiqueapplication/information">Open a Boutique <span>&rsaquo;</span></a>
                                        </li>
                                        <li>
                                            <a href="/help/photography">Photography Guide <span>&rsaquo;</span></a>
                                        </li>
                                        <li>
                                            <a href="/hub/seller-hub">Visit the Support Blog <span>&rsaquo;</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="logon redirect" href="/my/activity?WT.ac=Mktp_Head_Account">Account</a>

                                    
                                        <ul class="sub-nav">
                                            <span class="marker"></span> 
                                            <li><a href='/my/listings/add' class='logon redirect'>List an item <span>&rsaquo;</span></a></li>
                                            <li><a href='/my/items' class='logon redirect'>Manage items <span>&rsaquo;</span></a></li>
                                            <li><a href='/my/sales' class='logon redirect'>Sales <span>&rsaquo;</span></a></li>

                                            <li><a href='/my/feedback' class='logon redirect'>Feedback <span>&rsaquo;</span></a></li>
                                            <li><a href='/my/boutique' class='logon redirect'>Boutique <span>&rsaquo;</span></a></li>
                                            <li><a href='/boutique/ed?showMerchandisingControlsOnLoad=True' class='logon redirect'>Merchandise Storefront <span>&rsaquo;</span></a></li>
                                            <li><a href='/my/paidpromotions/promoteyourboutique' class='logon redirect'>Promote boutique <span>&rsaquo;</span></a></li>
                                            
                                        </ul>
                                    
                                </li>
                                
                                <li>
                                    <a href="/basket?WT.ac=Mktp_Head_Bag">
                                        <span>Bag</span>
                                        <span class="qty">
                                            (<span id="basket-qty">0</span>)
                                        </span>

                                    </a>
                                </li>
                                
                                    <li>
                                        <a href="/saved?WT.ac=Mktp_Head_Saved">Favourites<span class="qty">(<span id="star-qty">0</span>)</span> </a>
                                    </li>
                            
                        </ul>
                    </li>
                </ul>
            </fieldset>
                        </div>			
                        

            <h2>Site navigation</h2>

            <ul id="menu" class="nav">
                <li class="home">
                    <a href="/?dp=1&amp;ctaRef=Mktp_Head_Home" title="Home">
                        <span >
                            Home?dp=1&amp;ctaRef=Mktp_Head_Home
                        </span>
                    </a>
                </li>

                    <li class="women">
                        <a class="tab" href="/women?ctaRef=Mktp_Head_Women">
                            <span class="selected">
                                Women
                            </span>
                        </a>
                      </li>
                    <li class="men">
                        <a class="tab" href="/men?ctaRef=Mktp_Head_Men">
                            <span >
                                Men
                            </span>
                        </a>
                    </li>
                    <li class="boutiques">
                        <a class="tab" href="/boutiques?ctaRef=Mktp_Head_Boutiques">
                            <span >
                                Boutiques
                            </span>
                        </a>
                    </li>
            </ul>
            <hr />
        </div>
      </div>
  </div>
)

export default Header
