$('./body'){
	$("./div[@id='wrapper']"){
		$("./div[@id='footer']"){
			$(".//div[@class='container-holder']"){
			
				move_here("./div[@id='footermenu2']","top"){
					$("./ul[contains(@class,'country-list')]"){
						$(".//ul"){
							insert_after("div",id:"mw_hrdottedLine")
						}
					}
				}
				
				$("./div[@id='footermenu3']"){
					remove('./p')
				}
				
				$("./div[contains(@class,'col-4')]"){
					#move_here("../../../../../.././/ul[@class='social']","top")
					move_here("./ancestor::ul[@class='social']","top"){
						log('-------------------------->')
						remove(".//li[@class='livechat']")
					}
				}
			
			}
		}
	
	}
	
}
