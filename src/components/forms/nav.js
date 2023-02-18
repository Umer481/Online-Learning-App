
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-5Bs4ERl99/u2AUfpOZF2F0cdfNby7+Vd9teUshXUBPo5CjwECR7IAEf+weI/eCk5tF7K1h3O8hd8k0+P/HePeg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-e41b3811197df7fbb60147e939917617.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-21eX2YaEYIYa91WFh0mXaxJ3wLQxy2ldlpRbyuCueK3MvqHGEzmXYPkMQ4XBtASauZXKlL1hPxQQU9g28R03wQ==" rel="stylesheet" href="https://github.githubassets.com/assets/site-db5797d9868460861af755858749976b.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-Re61UH4xUBCOxx/3uaTk/9AqjeMSjHipJO5zH6E+sQMQ+Zkxn17bzp/SgdY7c/FV1tXeSfswGs0dx2OMPMsIrg==" rel="stylesheet" href="https://github.githubassets.com/assets/github-45eeb5507e3150108ec71ff7b9a4e4ff.css" />
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>react-step-wizard/nav.js at master · jcmcneal/react-step-wizard · GitHub</title>
    <meta name="description" content="A modern flexible step wizard component built for React. - jcmcneal/react-step-wizard">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars2.githubusercontent.com/u/7417134?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="jcmcneal/react-step-wizard" /><meta name="twitter:description" content="A modern flexible step wizard component built for React. - jcmcneal/react-step-wizard" />
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/7417134?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="jcmcneal/react-step-wizard" /><meta property="og:url" content="https://github.com/jcmcneal/react-step-wizard" /><meta property="og:description" content="A modern flexible step wizard component built for React. - jcmcneal/react-step-wizard" />

  <link rel="assets" href="https://github.githubassets.com/">
  
  

  <meta name="request-id" content="E1CE:3E81:9771B1:CAAD4E:5E6F80E9" data-pjax-transient="true"/><meta name="html-safe-nonce" content="23bdaf7bad93067ae383cfe76a3730b57ae332d9" data-pjax-transient="true"/><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9qY21jbmVhbC9yZWFjdC1zdGVwLXdpemFyZC90cmVlL21hc3Rlci9hcHAvY29tcG9uZW50cyIsInJlcXVlc3RfaWQiOiJFMUNFOjNFODE6OTc3MUIxOkNBQUQ0RTo1RTZGODBFOSIsInZpc2l0b3JfaWQiOiI0NTkyMjMwMDI0MzA1OTk5MDQ5IiwicmVnaW9uX2VkZ2UiOiJhcC1zb3V0aC0xIiwicmVnaW9uX3JlbmRlciI6ImFwLXNvdXRoLTEifQ==" data-pjax-transient="true"/><meta name="visitor-hmac" content="ee81f3b944413be125949707e8bc8a01bf2e9dcdfb9dcb8073de4d958d10c440" data-pjax-transient="true"/>



  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" className="js-octo-ga-id" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta className="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">


    <meta name="enabled-features" content="MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,RELATED_ISSUES">

  <meta http-equiv="x-pjax-version" content="8f46080b9448a0c943b7c5ffa130db74">
  

      <link href="https://github.com/jcmcneal/react-step-wizard/commits/master.atom" rel="alternate" title="Recent Commits to react-step-wizard:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/jcmcneal/react-step-wizard git https://github.com/jcmcneal/react-step-wizard.git">

  <meta name="octolytics-dimension-user_id" content="7417134" /><meta name="octolytics-dimension-user_login" content="jcmcneal" /><meta name="octolytics-dimension-repository_id" content="76303050" /><meta name="octolytics-dimension-repository_nwo" content="jcmcneal/react-step-wizard" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="76303050" /><meta name="octolytics-dimension-repository_network_root_nwo" content="jcmcneal/react-step-wizard" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" className="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body className="logged-out env-production page-responsive page-blob">
    

  <div className="position-relative js-header-wrapper ">
    <a href="#start-of-content" className="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span className="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span className="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    



        <header className="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
  <div className="container-lg d-lg-flex flex-items-center p-responsive">
    <div className="d-flex flex-justify-between flex-items-center">
        <a className="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" className="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>

          <div className="d-lg-none css-truncate css-truncate-target width-fit p-2">
            
              <svg className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a className="Header-link" href="/jcmcneal">jcmcneal</a>
    /
    <a className="Header-link" href="/jcmcneal/react-step-wizard">react-step-wizard</a>


          </div>

        <div className="d-flex flex-items-center">
            <a href="/join?source=header-repo"
              className="d-inline-block d-lg-none f5 text-white no-underline border border-gray-dark rounded-2 px-2 py-1 mr-3 mr-sm-5"
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9834833babdf206f6189a12c300cbad2a1e837af42e4ca50266eab97eec30a43"
              data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
              Sign&nbsp;up
            </a>

          <button className="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" className="octicon octicon-three-bars text-white" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </button>
        </div>
    </div>

    <div className="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
      <div className="d-flex d-lg-none flex-justify-end border-bottom bg-gray-light p-3">
        <button className="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" className="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav className="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul className="d-lg-flex list-style-none">
              <li className="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details className="HeaderMenu-details details-overlay details-reset width-full">
                  <summary className="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" className="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div className="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/features" className="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span className="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul className="list-style-none f5 pb-3">
                      <li className="edge-item-fix"><a href="/features/code-review/" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li className="edge-item-fix"><a href="/features/project-management/" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li className="edge-item-fix"><a href="/features/integrations" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li className="edge-item-fix"><a href="/features/actions" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a></li>
                          <li className="edge-item-fix"><a href="/features/packages" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Packages">Packages</a></li>
                      <li className="edge-item-fix"><a href="/features/security" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Security">Security</a></li>
                      <li className="edge-item-fix"><a href="/features#team-management" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li className="edge-item-fix"><a href="/features#hosting" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Hosting</a></li>
                    </ul>

                    <ul className="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li className="edge-item-fix"><a href="/customer-stories" className="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories <span className="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li className="edge-item-fix"><a href="/security" className="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span className="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li className="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/enterprise" className="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li className="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details className="HeaderMenu-details details-overlay details-reset width-full">
                  <summary className="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" className="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div className="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <ul className="list-style-none mb-3">
                      <li className="edge-item-fix"><a href="/explore" className="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span className="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 className="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Learn &amp; contribute</h4>
                    <ul className="list-style-none mb-3">
                      <li className="edge-item-fix"><a href="/topics" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                        <li className="edge-item-fix"><a href="/collections" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li className="edge-item-fix"><a href="/trending" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li className="edge-item-fix"><a href="https://lab.github.com/" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li className="edge-item-fix"><a href="https://opensource.guide" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 className="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Connect with others</h4>
                    <ul className="list-style-none mb-0">
                      <li className="edge-item-fix"><a href="https://github.com/events" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li className="edge-item-fix"><a href="https://github.community" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li className="edge-item-fix"><a href="https://education.github.com" className="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li className="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/marketplace" className="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li className="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details className="HeaderMenu-details details-overlay details-reset width-full">
                  <summary className="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" className="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div className="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/pricing" className="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span className="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul className="list-style-none mb-3">
                      <li className="edge-item-fix"><a href="/pricing#feature-comparison" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans</a></li>
                      <li className="edge-item-fix"><a href="https://enterprise.github.com/contact" className="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales</a></li>
                    </ul>

                    <ul className="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li className="edge-item-fix"><a href="/nonprofit" className="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span className="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li className="edge-item-fix"><a href="https://education.github.com" className="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span className="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div className="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <div className="d-lg-flex mb-3 mb-lg-0">
            <div className="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div className="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form className="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="76303050" data-scoped-search-url="/jcmcneal/react-step-wizard/search" data-unscoped-search-url="/search" action="/jcmcneal/react-step-wizard/search" accept-charset="UTF-8" method="get">
      <label className="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          className="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" data-csrf="true" className="js-data-jump-to-suggestions-path-csrf" value="hggc0W4AEjGO9N7M04m82TnkcqLS73zK33b2Eb5gcZ/j8ZXVVfdScFr+JkecigjYez3Qie5WZowopr3YhEqY8g==" />
          <input type="hidden" className="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="mr-2 header-search-key-slash">

            <div className="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul className="d-none js-jump-to-suggestions-template-container">
  

<li className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" className="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" className="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" className="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span className="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span className="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul className="d-none js-jump-to-no-results-template-container">
  <li className="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span className="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" className="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" className="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" className="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" className="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span className="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span className="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" className="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" className="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" className="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span className="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span className="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a href="/login?return_to=%2Fjcmcneal%2Freact-step-wizard%2Fblob%2Fmaster%2Fapp%2Fcomponents%2Fnav.js"
          className="HeaderMenu-link no-underline mr-3"
          data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9402c4583a0f7e1c55154fd60bac084768fc3f7df3a37d57927bc1554e8adcb8"
          data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign&nbsp;in
        </a>
          <a href="/join?source=header-repo&amp;source_repo=jcmcneal%2Freact-step-wizard"
            className="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"
            data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9402c4583a0f7e1c55154fd60bac084768fc3f7df3a37d57927bc1554e8adcb8"
            data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
            Sign&nbsp;up
          </a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" className="show-on-focus"></div>


    <div id="js-flash-container">

</div>


      

  <include-fragment className="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div className="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" className="">
    <main  >
      

  











  <div className="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-0 pt-lg-3">

    <div className="d-flex container-lg mb-4 p-responsive d-none d-lg-flex">

      <div className="flex-auto min-width-0 width-fit mr-3">
        <h1 className="public  d-flex flex-wrap flex-items-center break-word float-none ">
    <svg className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span className="author ml-1 flex-self-stretch" itemprop="author">
    <a className="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/jcmcneal/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jcmcneal">jcmcneal</a>
  </span>
  <span className="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" className="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/jcmcneal/react-step-wizard">react-step-wizard</a>
  </strong>
  
</h1>


      </div>

      <ul className="pagehead-actions flex-shrink-0 " >




  <li>
    
  <a className="tooltipped tooltipped-s btn btn-sm btn-with-count" aria-label="You must be signed in to watch a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7f2968655a903a123a37c6b264092afd7c557fbd081e89c2e620944bd07d1bdb" href="/login?return_to=%2Fjcmcneal%2Freact-step-wizard">
    <svg className="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
</a>    <a className="social-count" href="/jcmcneal/react-step-wizard/watchers"
       aria-label="2 users are watching this repository">
      2
    </a>

  </li>

  <li>
        <a className="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:76303050,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="5cefd331f7074bb1dc5f5b434a72dda1b3cb0bc80f1985d10fb6ad98cf6747f2" href="/login?return_to=%2Fjcmcneal%2Freact-step-wizard">
      <svg height="16" className="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

      Star
</a>
    <a className="social-count js-social-count" href="/jcmcneal/react-step-wizard/stargazers"
      aria-label="244 users starred this repository">
      244
    </a>

  </li>

  <li>
      <a className="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:76303050,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6f74f39b023f9847d8f832679c16385816f0517770142e4457ef418f42ef4816" href="/login?return_to=%2Fjcmcneal%2Freact-step-wizard">
        <svg className="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
</a>
    <a href="/jcmcneal/react-step-wizard/network/members" className="social-count"
       aria-label="50 users forked this repository">
      50
    </a>
  </li>
</ul>

    </div>
      
<nav className="hx_reponav reponav js-repo-nav js-sidenav-container-pjax clearfix container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a className="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /jcmcneal/react-step-wizard" href="/jcmcneal/react-step-wizard">
      <div className="d-inline"><svg className="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg></div>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" className="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /jcmcneal/react-step-wizard/issues" href="/jcmcneal/react-step-wizard/issues">
        <div className="d-inline"><svg className="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg></div>
        <span itemprop="name">Issues</span>
        <span className="Counter">14</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" className="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /jcmcneal/react-step-wizard/pulls" href="/jcmcneal/react-step-wizard/pulls">
      <div className="d-inline"><svg className="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg></div>
      <span itemprop="name">Pull requests</span>
      <span className="Counter">1</span>
      <meta itemprop="position" content="4">
</a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" className="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" className="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /jcmcneal/react-step-wizard/actions" href="/jcmcneal/react-step-wizard/actions">
        <div className="d-inline"><svg className="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"/></svg></div>
        Actions
</a>
    </span>

    <a data-hotkey="g b" className="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /jcmcneal/react-step-wizard/projects" href="/jcmcneal/react-step-wizard/projects">
      <div className="d-inline"><svg className="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg></div>
      Projects
      <span className="Counter">0</span>
</a>
    <a className="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jcmcneal/react-step-wizard/wiki" href="/jcmcneal/react-step-wizard/wiki">
      <div className="d-inline"><svg className="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg></div>
      Wiki
</a>
    <a data-skip-pjax="true" className="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy token_scanning code_scanning /jcmcneal/react-step-wizard/security/advisories" href="/jcmcneal/react-step-wizard/security/advisories">
      <div className="d-inline"><svg className="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg></div>
      Security
</a>
    <a className="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /jcmcneal/react-step-wizard/pulse" href="/jcmcneal/react-step-wizard/pulse">
      <div className="d-inline"><svg className="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg></div>
      Insights
</a>

</nav>

  <div className="reponav-wrapper reponav-small d-lg-none">
  <nav className="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a className="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /jcmcneal/react-step-wizard" href="/jcmcneal/react-step-wizard">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" className="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /jcmcneal/react-step-wizard/issues" href="/jcmcneal/react-step-wizard/issues">
          <span itemprop="name">Issues</span>
          <span className="Counter">14</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" className="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /jcmcneal/react-step-wizard/pulls" href="/jcmcneal/react-step-wizard/pulls">
        <span itemprop="name">Pull requests</span>
        <span className="Counter">1</span>
        <meta itemprop="position" content="4">
</a>    </span>


      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" className="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /jcmcneal/react-step-wizard/projects" href="/jcmcneal/react-step-wizard/projects">
          <span itemprop="name">Projects</span>
          <span className="Counter">0</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" className="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /jcmcneal/react-step-wizard/actions" href="/jcmcneal/react-step-wizard/actions">
          <span itemprop="name">Actions</span>
          <meta itemprop="position" content="6">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" className="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /jcmcneal/react-step-wizard/wiki" href="/jcmcneal/react-step-wizard/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="7">
</a>      </span>

      <a itemprop="url" className="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy token_scanning code_scanning /jcmcneal/react-step-wizard/security/advisories" href="/jcmcneal/react-step-wizard/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="8">
</a>
      <a className="js-selected-navigation-item reponav-item" data-selected-links="pulse /jcmcneal/react-step-wizard/pulse" href="/jcmcneal/react-step-wizard/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>

  

  <include-fragment className="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>


<div className="container-lg clearfix new-discussion-timeline  p-responsive">
  <div className="repository-content ">

    
    


  


    <a className="d-none js-permalink-shortcut" data-hotkey="y" href="/jcmcneal/react-step-wizard/blob/6ee7978ccc08021c7e2ca54d9d77a6de3b992117/app/components/nav.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:ad1a3c8535a39556bd69ddb041df2f5c -->
      <div className="signup-prompt-bg rounded-1 js-signup-prompt" data-prompt="signup" hidden>
    <div className="signup-prompt p-4 text-center mb-4 rounded-1">
      <div className="position-relative">
        <button type="button" className="position-absolute top-0 right-0 btn-link link-gray js-signup-prompt-button" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
          Dismiss
        </button>
        <h3 className="pt-2">Join GitHub today</h3>
        <p className="col-6 mx-auto">GitHub is home to over 40 million developers working together to host and review code, manage projects, and build software together.</p>
        <a className="btn btn-primary" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;files signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="c3218b83bc6a21b42473c156f1262583f21efba25072c4d4046576f7af0f57a2" href="/join?source=prompt-blob-show&amp;source_repo=jcmcneal%2Freact-step-wizard">Sign up</a>
      </div>
    </div>
  </div>


    <div className="d-flex flex-items-start flex-shrink-0 flex-column flex-md-row pb-3">
      <span className="d-flex flex-justify-between width-full width-md-auto">
        
<details className="details-reset details-overlay branch-select-menu " id="branch-select-menu">
  <summary className="btn btn-sm css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span className="css-truncate-target" data-menu-button>master</span>
    <span className="dropdown-caret"></span>
  </summary>

  <details-menu className="SelectMenu SelectMenu--hasFilter" src="/jcmcneal/react-step-wizard/refs/master/app/components/nav.js?source_action=show&amp;source_controller=blob" preload>
    <div className="SelectMenu-modal">
      <include-fragment className="SelectMenu-loading" aria-label="Menu is loading">
        <svg className="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>

        <div className="BtnGroup flex-shrink-0 d-md-none">
          <a href="/jcmcneal/react-step-wizard/find/master"
                className="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="app/components/nav.js" className="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" className="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span className="js-repo-root text-bold"><span className="js-path-segment"><a data-pjax="true" href="/jcmcneal/react-step-wizard"><span>react-step-wizard</span></a></span></span><span className="separator">/</span><span className="js-path-segment"><a data-pjax="true" href="/jcmcneal/react-step-wizard/tree/master/app"><span>app</span></a></span><span className="separator">/</span><span className="js-path-segment"><a data-pjax="true" href="/jcmcneal/react-step-wizard/tree/master/app/components"><span>components</span></a></span><span className="separator">/</span><strong className="final-path">nav.js</strong>
      </h2>

      <div className="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/jcmcneal/react-step-wizard/find/master"
              className="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="app/components/nav.js" className="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>

    



    <include-fragment src="/jcmcneal/react-step-wizard/contributors/master/app/components/nav.js" className="Box Box--condensed commit-loader">
      <div className="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div className="Box-body d-flex flex-items-center" >
        <img alt="" className="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span className="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>





    <div className="Box mt-3 position-relative
      ">
      
<div className="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div className="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      23 lines (20 sloc)
      <span className="file-info-divider"></span>
    581 Bytes
  </div>

  <div className="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div className="BtnGroup">
      <a id="raw-url" className="btn btn-sm BtnGroup-item" href="/jcmcneal/react-step-wizard/raw/master/app/components/nav.js">Raw</a>
        <a className="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/jcmcneal/react-step-wizard/blame/master/app/components/nav.js">Blame</a>
      <a rel="nofollow" className="btn btn-sm BtnGroup-item" href="/jcmcneal/react-step-wizard/commits/master/app/components/nav.js">History</a>
    </div>


    <div>
          <a className="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="https://desktop.github.com"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg className="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
          </a>

          <button type="button" className="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg className="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" className="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg className="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>




      

  <div itemprop="text" className="Box-body p-0 blob-wrapper data type-javascript ">
      
<table className="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
      <tr>
        <td id="L1" className="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" className="blob-code blob-code-inner js-file-line"><span className=pl-k>import</span> <span className=pl-v>React</span> <span className=pl-k>from</span> <span className=pl-s>&#39;react&#39;</span><span className=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2" className="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" className="blob-code blob-code-inner js-file-line"><span className=pl-c>/* eslint react/prop-types: 0 */</span></td>
      </tr>
      <tr>
        <td id="L3" className="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" className="blob-code blob-code-inner js-file-line"><span className=pl-k>import</span> <span className=pl-s1>styles</span> <span className=pl-k>from</span> <span className=pl-s>&#39;./nav.less&#39;</span><span className=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L4" className="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" className="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" className="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" className="blob-code blob-code-inner js-file-line"><span className=pl-k>const</span> <span className=pl-v>Nav</span> <span className=pl-c1>=</span> <span className=pl-kos>(</span><span className=pl-s1>props</span><span className=pl-kos>)</span> <span className=pl-c1>=&gt;</span> <span className=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L6" className="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" className="blob-code blob-code-inner js-file-line">    <span className=pl-k>const</span> <span className=pl-s1>dots</span> <span className=pl-c1>=</span> <span className=pl-kos>[</span><span className=pl-kos>]</span><span className=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L7" className="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" className="blob-code blob-code-inner js-file-line">    <span className=pl-k>for</span> <span className=pl-kos>(</span><span className=pl-k>let</span> <span className=pl-s1>i</span> <span className=pl-c1>=</span> <span className=pl-c1>1</span><span className=pl-kos>;</span> <span className=pl-s1>i</span> &lt;= <span className=pl-s1>props</span><span className=pl-kos>.</span><span className=pl-c1>totalSteps</span><span className=pl-kos>;</span> <span className=pl-s1>i</span> <span className=pl-c1>+=</span> <span className=pl-c1>1</span><span className=pl-kos>)</span> <span className=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L8" className="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" className="blob-code blob-code-inner js-file-line">        <span className=pl-k>const</span> <span className=pl-s1>isActive</span> <span className=pl-c1>=</span> <span className=pl-s1>props</span><span className=pl-kos>.</span><span className=pl-c1>currentStep</span> <span className=pl-c1>===</span> <span className=pl-s1>i</span><span className=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L9" className="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" className="blob-code blob-code-inner js-file-line">        <span className=pl-s1>dots</span><span className=pl-kos>.</span><span className=pl-en>push</span><span className=pl-kos>(</span><span className=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L10" className="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" className="blob-code blob-code-inner js-file-line">            <span className=pl-c1>&lt;</span><span className=pl-ent>span</span></td>
      </tr>
      <tr>
        <td id="L11" className="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" className="blob-code blob-code-inner js-file-line">                <span className=pl-c1>key</span><span className=pl-c1>=</span><span className=pl-kos>{</span><span className=pl-s>`step-<span className=pl-s1><span className=pl-kos>${</span><span className=pl-s1>i</span><span className=pl-kos>}</span></span>`</span><span className=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L12" className="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" className="blob-code blob-code-inner js-file-line">                <span className=pl-c1>className</span><span className=pl-c1>=</span><span className=pl-kos>{</span><span className=pl-s>`<span className=pl-s1><span className=pl-kos>${</span><span className=pl-s1>styles</span><span className=pl-kos>.</span><span className=pl-c1>dot</span><span className=pl-kos>}</span></span> <span className=pl-s1><span className=pl-kos>${</span><span className=pl-s1>isActive</span> ? <span className=pl-s1>styles</span><span className=pl-kos>.</span><span className=pl-c1>active</span> : <span className=pl-s>&#39;&#39;</span><span className=pl-kos>}</span></span>`</span><span className=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L13" className="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" className="blob-code blob-code-inner js-file-line">                <span className=pl-c1>onClick</span><span className=pl-c1>=</span><span className=pl-kos>{</span><span className=pl-kos>(</span><span className=pl-kos>)</span> <span className=pl-c1>=&gt;</span> <span className=pl-s1>props</span><span className=pl-kos>.</span><span className=pl-en>goToStep</span><span className=pl-kos>(</span><span className=pl-s1>i</span><span className=pl-kos>)</span><span className=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L14" className="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" className="blob-code blob-code-inner js-file-line">            <span className=pl-c1>&gt;</span>&amp;bull;<span className=pl-c1>&lt;</span>/<span className=pl-ent>span</span><span className=pl-c1>&gt;</span></td>
      </tr>
      <tr>
        <td id="L15" className="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" className="blob-code blob-code-inner js-file-line">        <span className=pl-kos>)</span><span className=pl-kos>)</span><span className=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L16" className="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" className="blob-code blob-code-inner js-file-line">    <span className=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L17" className="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" className="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" className="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" className="blob-code blob-code-inner js-file-line">    <span className=pl-k>return</span> <span className=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L19" className="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" className="blob-code blob-code-inner js-file-line">        <span className=pl-c1>&lt;</span><span className=pl-ent>div</span> <span className=pl-c1>className</span><span className=pl-c1>=</span><span className=pl-kos>{</span><span className=pl-s1>styles</span><span className=pl-kos>.</span><span className=pl-c1>nav</span><span className=pl-kos>}</span><span className=pl-c1>&gt;</span><span className=pl-kos>{</span><span className=pl-s1>dots</span><span className=pl-kos>}</span><span className=pl-c1>&lt;</span>/<span className=pl-ent>div</span><span className=pl-c1>&gt;</span></td>
      </tr>
      <tr>
        <td id="L20" className="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" className="blob-code blob-code-inner js-file-line">    <span className=pl-kos>)</span><span className=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L21" className="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" className="blob-code blob-code-inner js-file-line"><span className=pl-kos>}</span><span className=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L22" className="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" className="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L23" className="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" className="blob-code blob-code-inner js-file-line"><span className=pl-k>export</span> <span className=pl-k>default</span> <span className=pl-v>Nav</span><span className=pl-kos>;</span></td>
      </tr>
</table>

  <details className="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary className="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg className="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
    </summary>
    <details-menu>
      <ul className="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" className="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" className="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a className="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/jcmcneal/react-step-wizard/blame/6ee7978ccc08021c7e2ca54d9d77a6de3b992117/app/components/nav.js">View git blame</a></li>
          <li><a className="dropdown-item" id="js-new-issue" role="menuitem" href="/jcmcneal/react-step-wizard/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details className="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog className="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form className="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input className="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" className="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div className="footer container-lg width-full p-responsive" role="contentinfo">
  <div className="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul className="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li className="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li className="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li className="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li className="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li className="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" className="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul className="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li className="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li className="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li className="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li className="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li className="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div className="d-flex flex-justify-center pb-6">
    <span className="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" className="ajax-error-message flash flash-error">
    <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" className="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-o4vS4IKrjdy/HD+xr2+VhO6DxQmj5jikhHbEGrd8+JGhpmIOxRrpT1Qo5k3IhKimm8VXIu3pyYejLtOAkm+OsQ==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-a38bd2e0.js"></script>
    <script crossorigin="anonymous" integrity="sha512-2GtXiukHeT1/Kt5UHrVa2iMiBF1fCLQILWG0UKazKtQXjLZpcurZ6AXlkiTZFUeEtVWjoV8LvyppgPp9rkQMUA==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-d86b578a.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-1/6VVx6z9r6uphSoGlmYgbqD5KaY+GVMt1Gqa3DIa0U+3Pv2SWu8Fk1BZ2xPne5upvF8HdEWcGeiUjd2URl+oA==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-d7fe9557.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-xsA3sBl8JJO5akap5j4M9WWnm7ipNVg8c00Uxvr+Z+5h6WippkP2z5FD5+t9qdyIzjx/57G/dfU+iLBG4gmTQQ==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-c6c037b0.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-Zq8H9qjfkRlraQjaUSQQSwrBzCcU/MxadflRmCjXOcrQ0bYqsGOKxVxQ2g9vyNSv6q6VmIAKP6a95f8ZMrSOcw==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-66af07f6.js"></script>
    
    
    
  <div className="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span className="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span className="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details className="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog className="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button className="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div className="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div className="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div className="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" className="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

