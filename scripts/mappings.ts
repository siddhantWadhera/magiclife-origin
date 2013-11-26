/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
	 log('----------------------------------------------------------> PATH : : :' + $path)
      with(/^\/$|^\/\?/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }
	  with(/en|de|ch/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
		
      }
      else() {
        log("--> No page match in mappings.ts")
      }
    }
	match($host) {
		log("-------------------------------------------------------> HOST: :  : "  + $host)
		with(/booking/){
			
			 #@import pages/booking/booking.ts
		}
	}
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
