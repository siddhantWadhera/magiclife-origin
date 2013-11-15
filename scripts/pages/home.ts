$("./body") {
	$("./div[@id='wrapper']"){
		$(".//div[@id='main']"){
			$(".//div[@id='content']"){
				#remove()  #temporary removed.
				#add_class("home-content")
				$(".//div[contains(@class,'gallery')]"){
					remove()
				}
			}
			$("./div[@class='main-holder']"){
				$("./div[@id='sidebar']"){
					## the club finder div 
					$(".//div[@class='sidebar-holder']"){
						$("./div[@class='box-form']"){
							$("./div[@id='tab-1']"){
								log("------------------tab-1")
								$(".//fieldset"){
									$("./div[@class='field'][1]"){
										$("./div[@class='row'][2]"){
											#remove()
											insert_after("div",class:"date-group")
											$("./div[contains(@class,'half-col')]"){#remove()
												$("./div[@class='row'][2]") {
													%one = this()
													$("../div[@class='row'][3]") {
														move_children_to(%one, position("bottom"))
														remove()
													}
													wrap("div",class:"date-input") {
														$("./div") {
															unwrap()
														}
													}
												  
												}
												
											}
											
										}
										$("./div[@class='date-group']"){
											move_here('//div[@class="date-input"]')
										}
										
									}
									$("./div[@class='field'][2]"){
										$("./div[@class='row'][2]"){
											$('./p'){
												move_here(".././div[contains(@class,'quarter-col')][4]","after")
											}
										}
									}	
								
								}
							}
							$("./div[@id='tab-2']"){
								$(".//fieldset"){
									$("./div[@class='field'][2]"){
										$("./div[@class='row'][1]"){
											%two = this()
											$("../div[@class='row'][2]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
									}
									$("./div[@class='field'][3]"){
										$("./div[@class='row'][2]"){
											$("./div[contains(@class,'half-col')]"){
												remove_class('half-col')
												add_class('quarter-col')
											}
											insert_bottom("div",class:"quarter-col"){
												add_class("col")
												%three = this()
												$("(.././div[contains(@class,'quarter-col')])[1]") {
													
													$("(./div[@class='row'])[5]"){
														wrap("div",class:"check-group") {
														  move_children_to(%three, position("top"))
														  remove()
														}	
													}
													$("(./div[@class='row'])[4]"){
														wrap("div",class:"check-group") {
															move_children_to(%three, position("bottom"))
															remove()
														}	
													}
										
												}
												$("(.././div[contains(@class,'quarter-col')])[2]") {
													$("(./div[@class='row'])[4]"){
														wrap("div",class:"check-group") {
															move_children_to(%three, position("bottom"))
															remove()
														}	
													}
										
												}
											}
										}
									}
								}
							}
							$("./div[@id='tab-3']"){
								$(".//fieldset"){
									$("(./div[@class='field'])[1]"){
										$("(./div[@class='row'])[1]"){
											%four = this()
											$("./div[contains(@class,'quart-col')]") {
												remove_class("quart-col")
												add_class("quarter-col")
											}
											$("(.././div[@class='row'])[2]"){
												$("./div[contains(@class,'half-col')]"){
													remove_class("half-col")
													add_class("third-col")
												}
												move_children_to(%four, position("bottom"))
												remove()
											}
										}
										$("./div[@id='radio-tab3']"){
											%six =this()
											$("./div[contains(@class,'half-col')]"){
												$("./div[@class='row'][1]"){
													%seven=this()
													$("../div[@class='row'][2]") {
														move_children_to(%seven, position("bottom"))
														remove()
													}	
												}
												move_children_to(%six, position("bottom"))
												remove()
											}
										}
									}
									$("(./div[@class='field'])[2]"){
										$("./div[@class='row'][1]"){
											%two = this()
											$("../div[@class='row'][2]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
										$("./div[@class='row'][2]"){
											%two = this()
											$("../div[@class='row'][3]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
										$("./div[@class='row'][3]"){
											%two = this()
											$("../div[@class='row'][4]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
									}		
								}
							}
								
						}
					}			
					$("./div[@id='c12316']"){
						$("./div[@class='links-block']"){
							attribute('data-ur-set', 'toggler')
							$("./p[position()=1  ]"){
								name("div")
								$("./b"){
									name("h2")
									attribute('data-ur-toggler-component', 'button')
									insert('div', class: 'menu_indicator')
								}
								insert("div",id:"life-advantages")
								$("./div[@id= 'life-advantages']"){
									attribute('data-ur-toggler-component', 'content')
									move_here("../.././ul[@class='contentlist']","bottom"){
										#attribute('data-ur-toggler-component', 'content')
									}
									move_here("../.././p[position()= last()]","bottom"){
										$("./a"){
											#attribute('data-ur-toggler-component', 'content')
										}
									}
								}
								
							}
							$("./p[position()= last()-1]"){
								remove()
							}
							
						
						}
						
					}
					$("./div[@id='c12420']"){
						$("./div[@class='top-block']"){
							attribute('data-ur-set', 'toggler')
							$("./h2"){
								attribute('data-ur-toggler-component', 'button')
								insert('div', class: 'menu_indicator')
							}
							$("./ul"){
								attribute('data-ur-toggler-component', 'content')
							}		
						}
					
				
				
					}
					## removing the contact info from home page
					remove("../../.././/div[@id='topbar']")
			
				}
				
			
			}	
	
		
		}
	}
	#$("./div[@id='ui-datepicker-div']"){
		#remove_attributes()
	
	#}
}	