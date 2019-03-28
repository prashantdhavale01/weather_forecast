$(document).ready(function ($) {
  $.getJSON("json/JSONFile.json", function (json) {
    console.log(json); // this will show the info it in console          

    //Members Details
    var member = json.Member.filter(function (el) {
      return el.Id == 348;
    });
    member = member[0];
    console.log(member);
    $("#m_id").append(member.Id);
    $("#m_name").append(member.Name);
    $("#m_type").append(member.MemberShipType);
    $("#m_address").append(member.MemberAddress);
    $("#m_mob").append(member.MobileNo1);
    $("#m_email").append(member.EmailId);
    $("#m_refer_by_id").append(member.ReferedBy);
    $("#m_refer_by_name").append(member.ReferedByName);


    //Organization Details
    var org = json.Org.filter(function (el) {
      return el.MemberId == $("#m_id").text() && el.OrganizationId == 392;
    });
    org = org[0];
    console.log(org);
    $("#o_id").append(org.OrganizationId);
    $("#o_name").append(org.OrganizationName);
    $("#o_phone").append(org.PhoneNo);
    $("#o_email").append(org.EmailId);
    $("#o_website").append(org.Website);
    $("#o_address").append(org.OrganizationAddress);
    $("#o_m_name").append(org.MemberName);


    //OrgPartners Details
    var OrgPartners = json.OrgPartners.filter(function (el) {
      return el.OrganizationId == $("#o_id").text() && el.PartnerId == $("#m_refer_by_id").text();
    });
    OrgPartners = OrgPartners[0];
    console.log(org);
    $("#partner_name").append(OrgPartners.PartnerName);


    //Referral List Details
    $("#refer").append(json.ReferalList ? json.ReferalList : " - ");



    /* $.each(json.Member, function (index, member) {
    $("#m_id").append(member.Id);
    $("#m_name").append(member.Name);
    $("#m_type").append(member.MemberShipType);
    $("#m_address").append(member.MemberAddress);
    $("#m_mob").append(member.MobileNo1);
    $("#m_email").append(member.EmailId);
    $("#m_refer_by_id").append(member.ReferedBy);
    $("#m_refer_by_name").append(member.ReferedByName);
    }); */

    /* $.each(json.Org, function (index, org) {
    if (org.MemberId == $("#m_id").text() && org.OrganizationId == 392) {
    $("#o_id").append(org.OrganizationId);
    $("#o_name").append(org.OrganizationName);
    $("#o_phone").append(org.PhoneNo);
    $("#o_email").append(org.EmailId);
    $("#o_website").append(org.Website);
    $("#o_address").append(org.OrganizationAddress);
    $("#o_m_name").append(org.MemberName);
    }
    }); */

    /* $.each(json.OrgPartners, function (index, OrgPartners) {
      if (OrgPartners.OrganizationId == $("#o_id").text() && OrgPartners.PartnerId == $(
          "#m_refer_by_id").text())
        $("#partner_name").append(OrgPartners.PartnerName);
    }); */

  });
});