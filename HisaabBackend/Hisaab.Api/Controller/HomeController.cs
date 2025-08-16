using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hissab.Api.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {

        [HttpGet]
        [Route("welcome")]  
        public string WelcomeMessage()
        {
            return "Welcome to Hissab API, this message is from .net backend"; 
        }
    }
}
