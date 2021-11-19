using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson8App1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                // options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                //options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = "GoogleOpenId";
            }).AddCookie(options =>
            {
                options.LoginPath = "/Home/Login";
                options.Events = new CookieAuthenticationEvents()
                {
                    OnSigningIn = async context => {


                    }, 
                     OnSignedIn = async context => {


                    }
                 
                };
            })
            /*.AddGoogle(options =>
            {
                options.ClientId = "1079030440323-uht3nlnhp831ibne8kgc7rpf22n59ls3.apps.googleusercontent.com";
                options.ClientSecret = "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";
                options.CallbackPath = "/googleAuth";
            });*/
            .AddOpenIdConnect("GoogleOpenId",options =>
            {
                options.Authority = "https://accounts.google.com";
                options.ClientId = "1079030440323-uht3nlnhp831ibne8kgc7rpf22n59ls3.apps.googleusercontent.com";
                options.ClientSecret = "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";
                options.CallbackPath = "/googleAuth";
                options.SaveTokens = true;
                options.Events = new OpenIdConnectEvents()
                {
                    OnAuthorizationCodeReceived = async context => {


                    },

                    OnAccessDenied = async context => {


                    }

                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
